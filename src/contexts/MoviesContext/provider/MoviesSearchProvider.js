import { useState, useEffect } from "react";
import MoviesSearchContext from "../context/MoviesSearchContext";
import * as MainAPI from '../../../utils/MainAPI';

export function MoviesSearchProvider({ children }) {


    return (
        <MoviesSearchContext.Provider
            value={{}}
        >
            {children}
        </MoviesSearchContext.Provider>
    );
}