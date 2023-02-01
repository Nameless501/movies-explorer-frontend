import { useCallback } from 'react';

function useResultCache() {
    const saveMoviesCache = useCallback((movies, error) => {
        sessionStorage.setItem('moviesCache', JSON.stringify({ movies, error }));
    }, []);

    const getMoviesCache = useCallback(() => {
        const movies = JSON.parse(sessionStorage.getItem('moviesCache'))

        return movies ? movies : { movies: [], error: '' };
    }, []);

    const saveSearchCache = useCallback((keywords) => {
        sessionStorage.setItem('searchCache', JSON.stringify(keywords));
    }, [])

    const getSearchCache = useCallback(() => {
        const keywords = JSON.parse(sessionStorage.getItem('searchCache'))

        return keywords ? keywords : { search: '', shortfilms: true };
    })

    return { saveMoviesCache, getMoviesCache, saveSearchCache, getSearchCache };
}

export default useResultCache;