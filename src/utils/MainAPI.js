import { mainApiConfig } from './configs';
import { handleResponseCheck } from './utils';

export const signUp = ({ name, password, email }) => {
    return fetch(mainApiConfig.signUp, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password,
            email,
            name
        })
    })
        .then(handleResponseCheck);
}

export const signIn = ({ password, email }) => {
    return fetch(mainApiConfig.signIn, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password,
            email
        })
    })
        .then(handleResponseCheck);
}

export const signOut = () => {
    return fetch(mainApiConfig.signOut, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(handleResponseCheck);
}

export const setUserData = ({ name, email }) => {
    return fetch(mainApiConfig.userData, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(handleResponseCheck);
}

export const checkToken = () => {
    return fetch(mainApiConfig.userData, {
        method: 'GET',
        credentials: 'include',
    })
        .then(handleResponseCheck);
}

export const getUserMovies = () => {
    return fetch(mainApiConfig.moviesData, {
        method: 'GET',
        credentials: 'include',
    })
        .then(handleResponseCheck);
}

export const saveMovie = (movie) => {
    return fetch(mainApiConfig.moviesData, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...movie }),
    })
        .then(handleResponseCheck);
}

export const deleteMovie = (id) => {
    return fetch(`${mainApiConfig.moviesData}/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
        .then(handleResponseCheck);
}