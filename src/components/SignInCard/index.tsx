import Input from "../Input";
import StyledSignInCard from "./styled";

interface Props {
    handleSignIn: (email: string, password: string) => Promise<void>;
}

export default function SignInCard({}: Props) {
    return (
        <StyledSignInCard>
            <h2>Sign in</h2>
            <form>
                <Input label="Email" type="email" />
                <Input label="Password" type="password" />

                <button type="submit">sign in</button>
            </form>
        </StyledSignInCard>
    );
}
