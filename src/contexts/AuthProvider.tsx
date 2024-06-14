import { User, signInWithEmailAndPassword } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../config/firebaseConfig";
import { FirebaseError } from "firebase/app";

interface ContextProps {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
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

    const register = async (email: string, password: string) => {};

    const signIn = async (email: string, password: string) => {
        try {
            setAuth((prev) => ({ ...prev, isLoading: true }));
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const user = userCredential.user;

            setAuth((prev) => ({ ...prev, user, error: null }));
        } catch (e) {
            const error = e as FirebaseError;
            const errorMessage = getCodeErrorMessage(error.code);
            setAuth((prev) => ({ ...prev, error: errorMessage }));
        } finally {
            setAuth((prev) => ({ ...prev, isLoading: false }));
        }
    };

    const signOut = async () => {};

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
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
