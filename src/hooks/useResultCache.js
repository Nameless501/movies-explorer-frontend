import { useCallback } from 'react';

function useResultCache() {
    const saveResultCache = useCallback((result) => {
        const current = JSON.parse(sessionStorage.getItem('moviesCache'));
        sessionStorage.setItem('moviesCache', JSON.stringify({ ...current, ...result }));
    }, [])

    const getResultCache = useCallback(() => {
        return JSON.parse(sessionStorage.getItem('moviesCache'));
    }, []);

    return { saveResultCache, getResultCache };
}

export default useResultCache;