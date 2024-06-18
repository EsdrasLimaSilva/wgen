import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import StyledHome from "./styled";
import HomeMenu from "../../components/HomeMenu";
import Modal from "../../components/Modal";

export default function Home() {
    const { isAuthenticated, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) navigate("/login");
    }, [isLoading]);

    if (isLoading) return <main>Loading...</main>;

    if (isAuthenticated)
        return (
            <StyledHome>
                <div className="home-container">
                    <h2>Wgen</h2>
                    <HomeMenu />
                </div>
            </StyledHome>
        );

    return (
        <main>
            <p>Something went wrong</p>
        </main>
    );
}
