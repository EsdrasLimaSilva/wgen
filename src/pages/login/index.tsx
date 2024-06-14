import { Link } from "react-router-dom";
import StyledLogin from "./styled";
import { useState } from "react";
import SignInCard from "../../components/SignInCard";
import RegisterCard from "../../components/RegisterCard";

export default function Login() {
    const [mode, setMode] = useState<"signin" | "register">("signin");

    const toggleMode = () => {
        setMode((prev) => {
            if (prev === "register") return "signin";
            return "register";
        });
    };

    const handleSignIn = async (email: string, password: string) => {};

    const handleRegister = async (email: string, password: string) => {};

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
