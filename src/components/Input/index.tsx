import { InputHTMLAttributes, forwardRef } from "react";
import StyledInput from "./styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = forwardRef(function Input({ label, ...rest }: Props) {
    return (
        <StyledInput>
            <strong>{label}</strong>
            <input {...rest} />
        </StyledInput>
    );
});

export default Input;
