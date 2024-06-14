import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthProvider";

export default function Home() {
    const { isAuthenticated, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) navigate("/login");
    }, [isLoading]);

    if (isLoading) return <main>Loading...</main>;

    if (isAuthenticated)
        return (
            <main>
                <h2>Home</h2>
                <p>You must be authenticated to see this content</p>
                <Link to="/login">Login</Link>
            </main>
        );

    return (
        <main>
            <p>Something went wrong</p>
        </main>
    );
}
