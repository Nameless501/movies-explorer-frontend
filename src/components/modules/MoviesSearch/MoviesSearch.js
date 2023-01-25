import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import './MoviesSearch.css';

function MoviesSearch() {
    return (
        <section className='movies-search' >
            <form className='movies-search__form' >
                <SearchInput />
                <ToggleInput
                    name='shortfilms'
                    id='shortfilms-selector'
                    title='Короткометражки'
                />
            </form>
        </section>
    );
}

export default MoviesSearch;