import { useCallback } from "react";
import { FieldValues, Resolver } from "react-hook-form";
import { Schema, ValidationError } from "yup";

export default function useFormResolver<T extends FieldValues>(validationSchema: Schema<T>): Resolver<T> {
    return useCallback(async (values) => {
        try {
            const vals = await validationSchema.validate(values, { abortEarly: false });
            return { values: { ...vals }, errors: {} };
        } catch (e) {
            const errors = e as ValidationError;
            const allErrors: { [key: string]: { message: string | undefined } } = {};

            errors.inner.forEach((valError) => (allErrors[valError.path!] = { message: valError.message }));

            return {
                values: {} as T,
                errors: { ...allErrors }
            };
        }
    }, []);
}
