import { useState, useEffect } from 'react';
import useMoviesSearch from '../../../hooks/useMoviesSearch';
import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import SavedMovies from '../../modules/SavedMovies/SavedMovies';
import * as MainAPI from '../../../utils/MainAPI';
import { ERROR_MOVIES_FETCH, ERROR_MOVIES_INPUT } from '../../../utils/constants';
import './SavedMoviesPage.css';

function SavedMoviesPage() {
    const [userMoviesList, setUserMoviesList] = useState(JSON.parse(localStorage.getItem('userMovies')));
    const [isLoading, setLoadingState] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { filteredMoviesList, handleMoviesSearch } = useMoviesSearch(setErrorMessage, userMoviesList);

    // movies filter and submit handlers

    function handleSubmit(inputsValue) {
        if (inputsValue.keyword && inputsValue.keyword.length > 0) {
            handleMoviesSearch(userMoviesList, inputsValue);
        }
    };

    // load saved cards

    useEffect(() => {
        if (!userMoviesList) {
            setLoadingState(true);

            MainAPI.getUserMovies()
                .then(movies => {
                    setUserMoviesList(() => movies);
                    localStorage.setItem('userMovies', JSON.stringify(movies));
                })
                .catch(err => {
                    setErrorMessage(ERROR_MOVIES_FETCH)
                    console.log(`Не удалось загрузить фильмы пользователя. Ошибка: ${err}`)
                })
                .finally(() => setLoadingState(false));
        }
    }, [userMoviesList]);

    // delete cards handler

    function handleMovieDelete(id) {
        MainAPI.deleteMovie(id)
                .then(movie => {
                    const movies = userMoviesList.filter(element => element._id !== movie._id);
                    setUserMoviesList(movies);
                    localStorage.setItem('userMovies', JSON.stringify(movies));
                })
                .catch(err => console.log(`Не удалось удалить фильм. Ошибка: ${err}`));
    }

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