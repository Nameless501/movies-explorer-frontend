import { useCallback } from 'react';

function useResultCache() {
    const saveResultCache = useCallback((key, result) => {
        const current = JSON.parse(sessionStorage.getItem(key));
        sessionStorage.setItem(key, JSON.stringify({ ...current, ...result }));
    }, [])

    const getResultCache = useCallback((key) => {
        return JSON.parse(sessionStorage.getItem(key));
    }, []);

    return { saveResultCache, getResultCache };
}

export default useResultCache;