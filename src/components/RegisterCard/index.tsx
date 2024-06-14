import Input from "../Input";
import StyledRegisterCard from "./styled";

interface Props {
    handleRegister: (email: string, password: string) => Promise<void>;
}

export default function RegisterCard({ handleRegister }: Props) {
    return (
        <StyledRegisterCard>
            <h2>Register</h2>
            <form>
                <Input label="Email" type="email" />
                <Input label="Password" type="password" />
                <Input label="Confirm password" type="password" />

                <button type="submit">Register</button>
            </form>
        </StyledRegisterCard>
    );
}
