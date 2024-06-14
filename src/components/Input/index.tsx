import { InputHTMLAttributes, Ref, forwardRef } from "react";
import StyledInput from "./styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = forwardRef(function ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) {
    return (
        <StyledInput>
            <span>{label}</span>
            <input {...rest} ref={ref} />
            {error && <p className="error-message">{error}</p>}
        </StyledInput>
    );
});

export default Input;
