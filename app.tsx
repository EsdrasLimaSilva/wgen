import React from "react";
import AppRouter from "./src/routes/index";
import ThemeContext from "./src/contexts/ThemeContext";
import AuthProvider from "./src/contexts/AuthProvider";
import RoomProvider from "./src/contexts/RoomProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <AuthProvider>
            <ThemeContext>
                <RoomProvider>
                    <ToastContainer />
                    <AppRouter />
                </RoomProvider>
            </ThemeContext>
        </AuthProvider>
    );
}
