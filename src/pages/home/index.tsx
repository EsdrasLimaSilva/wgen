import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>
            <h2>Home</h2>
            <Link to="/login">Login</Link>
        </main>
    );
}
