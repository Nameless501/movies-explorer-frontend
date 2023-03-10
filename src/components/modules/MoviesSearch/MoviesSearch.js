import { useEffect, useState } from 'react';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import useResultCache from '../../../hooks/useResultCache';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { ERROR_MOVIES_INPUT } from '../../../utils/constants';
import './MoviesSearch.css';

function MoviesSearch({ handleSubmit, handleShortfilmsToggle, cacheValues = false }) {
    const [validationError, setValidationError] = useState('');
    const { inputsValues, handleInputChange, handleToggleChange, resetFormValues } = useFormStateAndValidation({ shortfilms: true });
    const { saveResultCache, getResultCache } = useResultCache();

    // save and load previous search cache

    function handleValuesCache(inputsValues) {
        if (cacheValues) {
            saveResultCache('searchCache', inputsValues);
        }
    }

    useEffect(() => {
        if (cacheValues) {
            const cache = getResultCache('searchCache');
            cache && resetFormValues(cache);
        }
    }, [cacheValues, getResultCache, resetFormValues]);

    // input validation

    function handleInputValidate() {
        setValidationError('');
        const isValid = inputsValues.keyword && inputsValues.keyword.length > 0;

        if (!isValid) {
            setValidationError(ERROR_MOVIES_INPUT);
        }
        return isValid;
    }

    // event handlers

    function onSubmit(evt) {
        evt.preventDefault();
        const isValid = handleInputValidate();

        if (isValid) {
            handleSubmit(inputsValues);
            handleValuesCache(inputsValues);
        }
    }

    function handleToggle(evt) {
        handleToggleChange(evt);
        const { name, checked } = evt.target;

        handleShortfilmsToggle(checked);
        handleValuesCache({ [name]: checked });
    }

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
                    title='??????????????????????????????'
                    handleChange={handleToggle}
                    checked={inputsValues.shortfilms}
                />
            </form>
        </section>
    );
}

export default MoviesSearch;