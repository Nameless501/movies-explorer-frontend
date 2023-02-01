import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import './MoviesSearch.css';

function MoviesSearch({ handleSubmit }) {
    const { inputsValues, handleInputChange, handleToggleChange } = useFormStateAndValidation({ shortfilms: true });

    function onSubmit(evt) {
        evt.preventDefault();
        handleSubmit(inputsValues);
    }

    return (
        <section className='movies-search' >
            <form
                onSubmit={onSubmit}
                className='movies-search__form'
                noValidate
            >
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