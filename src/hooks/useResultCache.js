import { useCallback } from 'react';

function useResultCache() {
    function saveResultCache (result) {
        const current = JSON.parse(sessionStorage.getItem('moviesCache'));
        sessionStorage.setItem('moviesCache', JSON.stringify({ ...current, ...result }));
    };

    const getResultCache = useCallback(() => {
        const cache = JSON.parse(sessionStorage.getItem('moviesCache'));
        return cache ? cache : {};
    }, []);

    return { saveResultCache, getResultCache };
}

export default useResultCache;