import { useEffect, useState } from 'react';
import { SHORTFILM_DURATION, ERROR_NO_MOVIES } from '../utils/constants';

function useMoviesSearch(handleError, initialState) {
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);

    function handleMoviesSearch(movies, { keyword, shortfilms }) {
        const result = movies.filter(movie => {
            return shortfilms ?
                movie.nameRU.toLowerCase().includes(keyword)
                :
                movie.nameRU.toLowerCase().includes(keyword) && movie.duration >= SHORTFILM_DURATION;
        });

        setFilteredMoviesList(result);

        if (result.length === 0) {
            handleError(ERROR_NO_MOVIES);
        }
    };

    function clearFilteredMoviesList() {
        setFilteredMoviesList(() => []);
    }

    useEffect(() => {
        if(initialState) {
            setFilteredMoviesList(initialState);
        }
    }, [initialState]);

    return { filteredMoviesList, handleMoviesSearch, clearFilteredMoviesList };
}

export default useMoviesSearch;