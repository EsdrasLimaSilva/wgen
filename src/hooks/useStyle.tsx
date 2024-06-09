import { useContext } from "react";
import { TContext } from "../contexts/ThemeContext";

export default function useStyle() {
    const fields = useContext(TContext);

    return { ...fields };
}
