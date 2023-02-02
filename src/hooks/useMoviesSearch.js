import { SHORTFILM_DURATION, ERROR_NO_MOVIES } from '../utils/constants';

function useMoviesSearch( handleError, initialValue = [] ) {
    function checkError(result) {
        if (result.length === 0) {
            handleError(ERROR_NO_MOVIES);
        }
    };

    function filterByKeyword (movies, keyword) {
        const result = movies.filter(movie => movie.nameRU.toLowerCase().includes(keyword));
        checkError(result);
        return result;
    };

    function filterShortfilms (movies) {
        const result = movies.filter(movie => movie.duration >= SHORTFILM_DURATION);
        checkError(result);
        return result;
    };

    function handleMoviesFilter(shortfilms, keyword, movies) {
        let result = filterByKeyword(movies, keyword);

        if (!shortfilms) {
            result = filterShortfilms(result);
        }

        return result;
    }

    return { handleMoviesFilter };
}

export default useMoviesSearch;