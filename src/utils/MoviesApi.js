import { movieApiConfig } from './configs';
import { handleResponseCheck } from './utils';

export const getMovies = () => {
    return fetch(movieApiConfig.getMovies, {
        method: 'GET',
    })
        .then(handleResponseCheck);
}