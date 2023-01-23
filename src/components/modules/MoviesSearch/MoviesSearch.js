import SearchInput from '../../components/SearchInput/SearchInput';
import Checkbox from '../../UI/Checkbox/Checkbox';
import './MoviesSearch.css';

function MoviesSearch() {
    return (
        <section className='movies-search' >
            <form className='movies-search__form' >
                <SearchInput />
                <Checkbox
                    name='shortfilms'
                    id='shortfilms-selector'
                    title='Короткометражки'
                />
            </form>
        </section>
    );
}

export default MoviesSearch;