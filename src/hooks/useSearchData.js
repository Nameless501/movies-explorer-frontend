import { useState } from 'react';

function useSearchData() {
    const [keyword, setKeyword] = useState('');
    const [shortfilms, setShortfilms] = useState(true);

    function handleCollectData({ shortfilms, keyword }) {
        setShortfilms(shortfilms);

        if (keyword) {
            setKeyword(keyword);
        }
    }

    return { keyword, shortfilms, handleCollectData };
}

export default useSearchData;