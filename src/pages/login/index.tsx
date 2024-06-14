import StyledLogin from "./styled";
import { useEffect, useState } from "react";
import SignInCard from "../../components/SignInCard";
import RegisterCard from "../../components/RegisterCard";
import { useAuth } from "../../contexts/AuthProvider";
import { ImSpinner8 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
    const [mode, setMode] = useState<"signin" | "register">("signin");
    const { signIn, register, isLoading, isAuthenticated, error: AuthError } = useAuth();
    const navigate = useNavigate();

    const toggleMode = () => {
        setMode((prev) => {
            if (prev === "register") return "signin";
            return "register";
        });
    };

    const handleSignIn = async (email: string, password: string) => {
        await signIn(email, password);
    };

    const handleRegister = async (email: string, password: string) => {
        await register(email, password);
    };

    useEffect(() => {
        if (!isLoading && AuthError) toast(AuthError, { theme: "dark", type: "error" });
        if (isAuthenticated) navigate("/");
    }, [isLoading]);

    if (isLoading)
        return (
            <StyledLogin>
                <span className="spinner-container">
                    <p>Now loading</p>
                    <ImSpinner8 className="spinner" />
                </span>
            </StyledLogin>
        );

    return (
        <StyledLogin>
            <div className="form-container">
                {mode === "signin" ? (
                    <SignInCard handleSignIn={handleSignIn} />
                ) : (
                    <RegisterCard handleRegister={handleRegister} />
                )}
                <section>
                    <button className="toggle-login-mode-btn" type="button" onClick={toggleMode}>
                        {mode === "signin" ? "Create account" : "I already have an account"}
                    </button>
                </section>
            </div>
        </StyledLogin>
    );
}
