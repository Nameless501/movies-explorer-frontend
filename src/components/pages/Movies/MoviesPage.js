import { useEffect, useState } from 'react';
import { useUserMoviesContext } from '../../../contexts/UserMoviesContext';
import useMoviesSearch from '../../../hooks/useMoviesSearch';
import useSearchData from '../../../hooks/useSearchData';
import useResultCache from '../../../hooks/useResultCache';
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
    const [resultMoviesList, setResultMoviesList] = useState([]);

    const { userMoviesList, addUserMovie, deleteUserMovie } = useUserMoviesContext();
    const { handleMoviesFilter } = useMoviesSearch(setErrorMessage);
    const { keyword, shortfilms, handleCollectData } = useSearchData();
    const { saveResultCache, getResultCache } = useResultCache();

    // set filtered movies and save cache

    function handleResultRender(shortfilms, keyword, movies) {
        const result = handleMoviesFilter(shortfilms, keyword, movies);

        setResultMoviesList(() => result);
        saveResultCache('moviesCache', { movies: result });
    }

    // API fetch

    function handleMoviesDataFetch() {
        setLoadingState(true);

        MoviesApi.getMovies()
            .then(movies => {
                setMoviesList(() => movies);
                localStorage.setItem('movies', JSON.stringify(movies));
                return movies;
            })
            .then(movies => handleResultRender(shortfilms, keyword, movies))
            .catch(err => {
                setErrorMessage(ERROR_MOVIES_FETCH);
                console.log(`Не удалось загрузить фильмы. Ошибка: ${err}`)
            })
            .finally(() => setLoadingState(false));
    };

    // submit and toggle handlers

    function handleSubmit(inputsValues) {
        handleCollectData(inputsValues);

        if (moviesList.length > 0) {
            handleResultRender(inputsValues.shortfilms, inputsValues.keyword, moviesList);
        } else {
            handleMoviesDataFetch();
        }
    }

    function handleShortfilmsToggle(shortfilms) {
        handleCollectData({ shortfilms });

        if (keyword) {
            handleResultRender(shortfilms, keyword, moviesList);
        }
    }

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

    // save and get cached result

    useEffect(() => {
        const movieCache = getResultCache('moviesCache');
        const errorCache = getResultCache('errorsCache');

        movieCache?.movies && setResultMoviesList(movieCache.movies);
        errorCache?.error && setErrorMessage(errorCache.error);

    }, [getResultCache]);

    useEffect(() => {
        errorMessage && saveResultCache('errorsCache', { error: errorMessage });
    }, [errorMessage, saveResultCache]);

    return (
        <div className='movies-page' >
            <HeaderMain />
            <main className='movies-page__content' >
                <MoviesSearch
                    handleSubmit={handleSubmit}
                    handleShortfilmsToggle={handleShortfilmsToggle}
                    cacheValues={true}
                />
                <Movies
                    moviesList={resultMoviesList}
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