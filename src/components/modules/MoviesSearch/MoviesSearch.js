import { useEffect, useState } from 'react';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import useResultCache from '../../../hooks/useResultCache';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { ERROR_MOVIES_INPUT } from '../../../utils/constants';
import './MoviesSearch.css';

function MoviesSearch({ handleSubmit, loadCacheValues = false }) {
    const [validationError, setValidationError] = useState('');
    const { inputsValues, handleInputChange, handleToggleChange, resetFormValues } = useFormStateAndValidation({ shortfilms: true });
    const { getResultCache } = useResultCache();


    function onSubmit(evt) {
        evt.preventDefault();
        setValidationError('');

        if (!inputsValues.keyword || inputsValues.keyword.length === 0) {
            setValidationError(ERROR_MOVIES_INPUT);
            return;
        }

        handleSubmit(inputsValues);
    }

    // load previous search cache

    useEffect(() => {
        if (loadCacheValues) {
            const { keywords } = getResultCache();
            keywords && resetFormValues(keywords);
        }
    }, [loadCacheValues, getResultCache, resetFormValues]);

    return (
        <section className='movies-search' >
            <form
                onSubmit={onSubmit}
                className='movies-search__form'
                noValidate
            >
                <ErrorMessage
                    text={validationError}
                    place='movies-search'
                />
                <SearchInput
                    value={inputsValues.keyword}
                    handleChange={handleInputChange}
                />
                <ToggleInput
                    name='shortfilms'
                    id='shortfilms-selector'
                    title='Короткометражки'
                    handleChange={handleToggleChange}
                    checked={inputsValues.shortfilms}
                />
            </form>
        </section>
    );
}

export default MoviesSearch;