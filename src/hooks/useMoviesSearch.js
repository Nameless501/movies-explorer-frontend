import { useEffect, useState, useCallback } from 'react';
import { SHORTFILM_DURATION, ERROR_NO_MOVIES } from '../utils/constants';

function useMoviesSearch(handleError, initialState) {
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);

    function checkError(result) {
        if (result.length === 0) {
            handleError(ERROR_NO_MOVIES);
        }
    }

    function handleMoviesSearch(movies, {shortfilms, keyword}) {
        const result = movies.filter(movie => {
            return shortfilms ?
                movie.nameRU.toLowerCase().includes(keyword)
                :
                movie.nameRU.toLowerCase().includes(keyword) && movie.duration >= SHORTFILM_DURATION;
        });

        setFilteredMoviesList(result);
        checkError(result);
    };

    const resetFilteredMoviesList = useCallback((newMoviesList = []) => {
        setFilteredMoviesList(() => newMoviesList);
    }, [setFilteredMoviesList]);

    useEffect(() => {
        if(initialState) {
            setFilteredMoviesList(initialState);
        }
    }, [initialState]);

    return { filteredMoviesList, handleMoviesSearch, resetFilteredMoviesList };
}

export default useMoviesSearch;