import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Game from "../pages/game";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    );
}
