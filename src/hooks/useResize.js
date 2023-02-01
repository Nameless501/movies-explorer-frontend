import { useState, useEffect } from 'react';

function useResize() {
    const [cardsCount, setCardsCount] = useState(12);
    const [newCardsCount, setNewCardsCount] = useState(3);

    useEffect(() => {
        function handleResize() {
            const renderCount = window.innerWidth > 1279 ? 12 : window.innerWidth > 635 ? 8 : 5;
            const downloadCount = window.innerWidth > 1279 ? 3 : 2;
            setCardsCount(renderCount);
            setNewCardsCount(downloadCount);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return { cardsCount, newCardsCount };
}

export default useResize;