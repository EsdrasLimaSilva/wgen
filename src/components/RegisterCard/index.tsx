import { useForm } from "react-hook-form";
import useFormResolver from "../../hooks/useFormResolver";
import Input from "../Input";
import StyledRegisterCard from "./styled";
import * as yup from "yup";

interface Props {
    handleRegister: (email: string, password: string) => Promise<void>;
}

const schema = yup.object({
    email: yup
        .string()
        .required()
        .test("isEmail", "Email must be valid", (value) => value.includes("@") && value.length >= 5),
    password: yup
        .string()
        .required()
        .test("passLength", "Password must includes at least 8 chars", (val) => val.length >= 8),
    confirmPassword: yup
        .string()
        .required("Plear, confirm your password")
        .test("passMatch", "Passwords must match", (val, context) => {
            const pass = context.parent.password;
            return pass === val;
        })
});

export default function RegisterCard({ handleRegister }: Props) {
    const resolver = useFormResolver(schema);
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ resolver });

    return (
        <StyledRegisterCard>
            <h2>Register</h2>
            <form onSubmit={handleSubmit((data) => handleRegister(data.email, data.password))}>
                <Input label="Email" {...register("email")} type="email" error={errors.email?.message} />
                <Input
                    label="Password"
                    {...register("password")}
                    type="password"
                    error={errors.password?.message}
                />
                <Input
                    label="Confirm password"
                    {...register("confirmPassword")}
                    type="password"
                    error={errors.confirmPassword?.message}
                />

                <button type="submit">Register</button>
            </form>
        </StyledRegisterCard>
    );
}
