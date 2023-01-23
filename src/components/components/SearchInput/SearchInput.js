import TextInput from '../../UI/TextInput/TextInput';
import SearchButton from '../../UI/SearchButton/SearchButton';
import './SearchInput.css';

function SearchInput() {
    return (
        <fieldset className='search-input' >
            <TextInput
                place='search'
                placeholder='Фильм'
            />
            <SearchButton />
        </fieldset>
    );
}

export default SearchInput;