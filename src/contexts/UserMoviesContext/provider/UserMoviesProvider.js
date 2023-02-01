import { useState, useEffect } from "react";
import UserMoviesContext from "../context/UserMoviesContext";
import * as MainAPI from '../../../utils/MainAPI';
import { ERROR_MOVIES_FETCH, ERROR_NO_USER_MOVIES } from '../../../utils/constants';

export function UserMoviesProvider({ children }) {
    const [userMoviesList, setUserMoviesList] = useState([]);
    const [isLoading, setLoadingState] = useState(false);
    const [error, setError] = useState('');

    function checkUserMovies(moviesList) {
        if(moviesList.length === 0) {
            setError(ERROR_NO_USER_MOVIES)
        }
    }

    useEffect(() => {
        setLoadingState(true);
        const movies = JSON.parse(localStorage.getItem('userMovies'));

        if(movies) {
            setUserMoviesList(movies);
            checkUserMovies(movies);
            setLoadingState(false);
        } else {
            MainAPI.getUserMovies()
                .then(movies => {
                    setUserMoviesList(() => movies);
                    localStorage.setItem('userMovies', JSON.stringify(movies));
                    checkUserMovies(movies);
                })
                .catch(err => {
                    setError(ERROR_MOVIES_FETCH);
                    console.log(`Не удалось загрузить фильмы пользователя. Ошибка: ${err}`)
                })
                .finally(() => setLoadingState(false));
        }
    }, []);

    function addUserMovie(movie) {
        const updatedList = [ ...userMoviesList, movie ]
        setUserMoviesList(updatedList);
        localStorage.setItem('userMovies', JSON.stringify(updatedList));
    }

    function deleteUserMovie(movie) {
        const updatedList = userMoviesList.filter(element => element._id !== movie._id);
        setUserMoviesList(updatedList);
        localStorage.setItem('userMovies', JSON.stringify(updatedList));
        checkUserMovies(updatedList);
    }

    return (
        <UserMoviesContext.Provider
            value={{
                userMoviesList,
                isLoading,
                error,
                addUserMovie,
                deleteUserMovie,
            }}
        >
            {children}
        </UserMoviesContext.Provider>
    );
}