import { useState } from 'react';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { ERROR_MOVIES_INPUT } from '../../../utils/constants';
import './MoviesSearch.css';

function MoviesSearch({ handleSubmit }) {
    const [validationError, setValidationError] = useState('');
    const { inputsValues, handleInputChange, handleToggleChange } = useFormStateAndValidation({ shortfilms: true });

    function onSubmit(evt) {
        evt.preventDefault();
        setValidationError('');

        if (!inputsValues.keyword || inputsValues.keyword.length === 0) {
            setValidationError(ERROR_MOVIES_INPUT);
            return;
        }

        handleSubmit(inputsValues);
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
                    title='Короткометражки'
                    handleChange={handleToggleChange}
                    checked={inputsValues.shortfilms}
                />
            </form>
        </section>
    );
}

export default MoviesSearch;