import { useContext } from "react";
import UserMoviesContext from "../context/UserMoviesContext";

export function useUserMoviesContext() {
    const contextValue = useContext(UserMoviesContext);
    return { ...contextValue };
}