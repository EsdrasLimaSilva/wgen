import { FormEvent } from "react";
import Input from "../Input";
import StyledSignInCard from "./styled";
import * as yup from "yup";
import useFormResolver from "../../hooks/useFormResolver";
import { useForm } from "react-hook-form";

interface Props {
    handleSignIn: (email: string, password: string) => Promise<void>;
}

const schema = yup.object({
    password: yup.string().required("Password cannot be empty"),
    email: yup.string().required("Email cannot be empty")
});

export default function SignInCard({ handleSignIn }: Props) {
    const resolver = useFormResolver(schema);
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ resolver });

    return (
        <StyledSignInCard>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit((data) => handleSignIn(data.email, data.password))}>
                <Input label="Email" error={errors.email?.message} type="email" {...register("email")} />
                <Input
                    label="Password"
                    error={errors.password?.message}
                    type="password"
                    {...register("password")}
                />

                <button type="submit">sign in</button>
            </form>
        </StyledSignInCard>
    );
}
