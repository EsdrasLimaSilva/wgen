import { useEffect, useState } from "react";
import { firebaseAuth } from "../config/firebaseConfig";
import { User } from "firebase/auth";

export interface AuthProps {
    user: User | null;
    loading: boolean;
}

export default function useAuth() {
    const [auth, setAuth] = useState<AuthProps>({ user: null, loading: true });

    const getUser = () => {
        return auth.user;
    };

    const isLoading = () => {
        return auth.loading;
    };

    const isAuthenticated = () => {
        return !!auth.user;
    };

    const loadAuth = async () => {
        try {
            await firebaseAuth.authStateReady();
            const user = firebaseAuth.currentUser;
            setAuth((prev) => ({ ...prev, user }));
        } catch (e) {
            console.log("Error while initializing auth context: " + e);
        } finally {
            setAuth((prev) => ({ ...prev, loading: false }));
        }
    };

    const register = async () => {};
    const signIn = async () => {};
    const signOut = async () => {};

    useEffect(() => {
        loadAuth();
    }, []);

    return { getUser, isAuthenticated, isLoading };
}
