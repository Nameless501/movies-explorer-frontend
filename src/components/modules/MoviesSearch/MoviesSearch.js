import useFormDataCollect from '../../../hooks/useFormDataCollect';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import './MoviesSearch.css';

function MoviesSearch() {
    const { inputsValues, handleInputChange, handleToggleChange } = useFormDataCollect({ shortfilms: true });

    return (
        <section className='movies-search' >
            <form className='movies-search__form' >
                <SearchInput
                    value={inputsValues.search}
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