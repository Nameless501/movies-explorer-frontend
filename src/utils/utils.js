import { movieApiConfig } from './configs';

export function handleResponseCheck(response) {
    return response.ok ? response.json() : Promise.reject(response.status);
}

export function handleMovieDataFormat({ nameRU, nameEN, country, director, duration, year, image, id, description, trailerLink }) {
    return {
        nameRU,
        nameEN,
        description,
        country,
        director,
        duration,
        year,
        trailerLink,
        image: movieApiConfig.baseURL + image.url,
        thumbnail: movieApiConfig.baseURL + image.formats.thumbnail.url,
        movieId: id,
    };
}

export function getMovieId(movie, moviesList) {
    const movieData = moviesList.find(element => element.nameRU === movie.nameRU);
    return movieData ? movieData._id : '';
}