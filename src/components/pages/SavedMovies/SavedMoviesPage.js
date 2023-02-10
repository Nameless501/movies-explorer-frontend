import { useState, useEffect } from 'react';
import { useUserMoviesContext } from '../../../contexts/UserMoviesContext';
import useMoviesSearch from '../../../hooks/useMoviesSearch';
import useSearchData from '../../../hooks/useSearchData';
import useDataFetch from '../../../hooks/useDataFetch';
import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import SavedMovies from '../../modules/SavedMovies/SavedMovies';
import { apiConfig } from '../../../utils/configs';
import './SavedMoviesPage.css';

function SavedMoviesPage() {
    const [errorMessage, setErrorMessage] = useState('');
    const [resultMoviesList, setResultMoviesList] = useState([]);
    const [initialRender, setInitialRender] = useState(true);

    const { userMoviesList, isLoading, error, deleteUserMovie } = useUserMoviesContext();
    const { handleMoviesFilter } = useMoviesSearch(setErrorMessage);
    const { keyword, handleCollectData } = useSearchData();
    const { handleFetchById } = useDataFetch();

    // handle set filtered movies

    function handleResultRender(shortfilms, keyword, movies) {
        setResultMoviesList(() => handleMoviesFilter(shortfilms, keyword, movies));
    };

    // submit and toggle handlers

    function handleSubmit(inputsValues) {
        handleCollectData(inputsValues);

        if (userMoviesList.length > 0) {
            handleResultRender(inputsValues.shortfilms, inputsValues.keyword, userMoviesList);
        }
    };

    function handleShortfilmsToggle(shortfilms) {
        handleCollectData({ shortfilms });

        if (userMoviesList.length > 0) {
            handleResultRender(shortfilms, keyword, userMoviesList);
        }
    };

    // delete cards handler

    function handleMovieDelete(id) {
        handleFetchById(apiConfig.deleteMovie, id)
                .then(deleteUserMovie)
                .then(() => setResultMoviesList(current => {
                    return current.filter(movie => movie._id !== id);
                }))
                .catch(err => console.log(`Не удалось удалить фильм. Ошибка: ${err}`));
    };

    useEffect(() => {
        if(error) {
            setErrorMessage(error);
        }
    }, [error]);

    useEffect(() => {
        if(initialRender && userMoviesList.length > 0) {
            setResultMoviesList(userMoviesList);
            setInitialRender(false);
        };
    }, [initialRender, userMoviesList]);

    return (
        <div className='saved-movies-page' >
            <HeaderMain />
            <main className='saved-movies-page__content' >
                <MoviesSearch
                    handleSubmit={handleSubmit}
                    handleShortfilmsToggle={handleShortfilmsToggle}
                />
                <SavedMovies
                    moviesList={resultMoviesList}
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