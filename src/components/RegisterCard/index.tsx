interface Props {
    handleRegister: (email: string, password: string) => Promise<void>;
}

export default function RegisterCard({ handleRegister }: Props) {
    return (
        <section>
            <h2>Register</h2>
        </section>
    );
}
