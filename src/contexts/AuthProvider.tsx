import {
    User,
    createUserWithEmailAndPassword,
    deleteUser,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { firebaseApp, firebaseAuth } from "../config/firebaseConfig";
import { FirebaseError } from "firebase/app";
import Api from "../api/Api";

interface ContextProps {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<User | null>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<User | null>;
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

export function useAuth() {
    return useContext(AuthContext);
}

interface Props {
    children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
    const [auth, setAuth] = useState<{
        user: User | null;
        isLoading: boolean;
        error: string | null;
    }>({
        user: null,
        isLoading: true,
        error: null
    });

    const loadAuth = async () => {
        try {
            await firebaseAuth.authStateReady();
            const user = firebaseAuth.currentUser;
            setAuth((prev) => ({ ...prev, user }));
        } catch (e) {
            console.log("Error while initializing auth context: " + e);
        } finally {
            setAuth((prev) => ({ ...prev, isLoading: false }));
        }
    };

    const getCodeErrorMessage = (code: string) => {
        if (code === "auth/invalid-credential") return "Invalid credentials";

        return "Unable to proceed";
    };

    const register = async (email: string, password: string) => {
        try {
            setAuth((prev) => ({ ...prev, isLoading: true }));
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();
            setAuth((prev) => ({ ...prev, user, error: null }));
            await Api.createPlayer(user.uid, token);
            return user;
        } catch (e) {
            const error = e as FirebaseError;
            const errorMessage = getCodeErrorMessage(error.code);
            setAuth((prev) => ({ ...prev, error: errorMessage }));
            return null;
        } finally {
            setAuth((prev) => ({ ...prev, isLoading: false }));
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            setAuth((prev) => ({ ...prev, isLoading: true }));
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const user = userCredential.user;
            setAuth((prev) => ({ ...prev, user, error: null }));
            return user;
        } catch (e) {
            const error = e as FirebaseError;
            const errorMessage = getCodeErrorMessage(error.code);
            setAuth((prev) => ({ ...prev, error: errorMessage }));
            return null;
        } finally {
            setAuth((prev) => ({ ...prev, isLoading: false }));
        }
    };

    const logout = async () => {
        try {
            setAuth((prev) => ({ ...prev, isLoading: true }));
            await signOut(firebaseAuth);
            setAuth((prev) => ({ ...prev, user: null, error: null }));
        } catch (e) {
            const error = e as FirebaseError;
            const errorMessage = getCodeErrorMessage(error.code);
            setAuth((prev) => ({ ...prev, error: errorMessage }));
        } finally {
            setAuth((prev) => ({ ...prev, isLoading: false }));
        }
    };

    useEffect(() => {
        loadAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: auth.user,
                isLoading: auth.isLoading,
                isAuthenticated: !!auth.user,
                error: auth.error,
                register,
                signIn,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
