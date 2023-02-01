import { useState } from 'react';
import { useUserMoviesContext } from '../../../contexts/UserMoviesContext';
import useMoviesSearch from '../../../hooks/useMoviesSearch';
import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import Movies from '../../modules/Movies/Movies';
import * as MoviesApi from '../../../utils/MoviesApi';
import * as MainAPI from '../../../utils/MainAPI';
import { ERROR_MOVIES_FETCH } from '../../../utils/constants';
import './MoviesPage.css';

function MoviesPage() {
    const [moviesList, setMoviesList] = useState(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        return movies ? movies : []
    });
    const [isLoading, setLoadingState] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { userMoviesList, addUserMovie, deleteUserMovie } = useUserMoviesContext();
    const { filteredMoviesList, handleMoviesSearch } = useMoviesSearch(setErrorMessage);

    // movies filter and submit handlers

    function handleMoviesDataFetch(inputsValue) {
        MoviesApi.getMovies()
            .then(movies => {
                setMoviesList(() => movies);
                localStorage.setItem('movies', JSON.stringify(movies));
                handleMoviesSearch(movies, inputsValue);
            })
            .catch(err => {
                setErrorMessage(ERROR_MOVIES_FETCH);
                console.log(`Не удалось загрузить фильмы. Ошибка: ${err}`)
            })
            .finally(() => setLoadingState(false));
    };

    function handleSubmit(inputsValue) {
        setLoadingState(true);

        if (moviesList.length > 0) {
            handleMoviesSearch(moviesList, inputsValue);
            setLoadingState(false);
        }

        if (moviesList.length === 0) {
            handleMoviesDataFetch(inputsValue)
        }
    };

    // save and delete cards handlers

    function handleMovieSave(movieData) {
        MainAPI.saveMovie(movieData)
            .then(addUserMovie)
            .catch(err => console.log(`Не удалось сохранить фильм. Ошибка: ${err}`));
    }

    function handleMovieDelete(id) {
        MainAPI.deleteMovie(id)
            .then(deleteUserMovie)
            .catch(err => console.log(`Не удалось удалить фильм. Ошибка: ${err}`));
    }

    return (
        <div className='movies-page' >
            <HeaderMain />
            <main className='movies-page__content' >
                <MoviesSearch
                    handleSubmit={handleSubmit}
                />
                <Movies
                    moviesList={filteredMoviesList}
                    userMoviesList={userMoviesList}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    handleMovieSave={handleMovieSave}
                    handleMovieDelete={handleMovieDelete}
                />
            </main>
            <Footer />
        </div>
    );
}

export default MoviesPage;