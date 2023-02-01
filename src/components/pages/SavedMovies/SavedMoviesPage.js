import { useState, useEffect } from 'react';
import { useUserMoviesContext } from '../../../contexts/UserMoviesContext';
import useMoviesSearch from '../../../hooks/useMoviesSearch';
import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import SavedMovies from '../../modules/SavedMovies/SavedMovies';
import * as MainAPI from '../../../utils/MainAPI';
import './SavedMoviesPage.css';

function SavedMoviesPage() {
    const [errorMessage, setErrorMessage] = useState('');

    const { userMoviesList, isLoading, error, deleteUserMovie } = useUserMoviesContext();
    const { filteredMoviesList, handleMoviesSearch } = useMoviesSearch(setErrorMessage, userMoviesList);

    // submit handler

    function handleSubmit(inputsValue) {
        if(userMoviesList.length > 0) {
            handleMoviesSearch(userMoviesList, inputsValue);
        }
    };

    // delete cards handler

    function handleMovieDelete(id) {
        MainAPI.deleteMovie(id)
                .then(deleteUserMovie)
                .catch(err => console.log(`Не удалось удалить фильм. Ошибка: ${err}`));
    }

    useEffect(() => {
        if(error) {
            setErrorMessage(error);
        }
    }, [error])

    return (
        <div className='saved-movies-page' >
            <HeaderMain />
            <main className='saved-movies-page__content' >
                <MoviesSearch
                    handleSubmit={handleSubmit}
                />
                <SavedMovies
                    moviesList={filteredMoviesList}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    handleMovieDelete={handleMovieDelete}
                />
            </main>
            <Footer />
        </div>
    );
}

export default SavedMoviesPage;