import MovieCardButton from '../../UI/MovieCardButton/MovieCardButton';
import { BASE_API_URL } from '../../../utils/constants';
import './MovieCard.css';

function MovieCard({ nameRU, duration, image, typeSaved, typeDelete }) {
    return (
        <div className='movie-card' >
            <figure className='movie-card__figure' >
                <figcaption className='movie-card__caption' >
                    <span className='movie-card__title' >
                        {nameRU}
                    </span>
                    <span className='movie-card__duration' >
                        {duration.toLocaleString(
                            'ru',
                            {
                                style: 'unit',
                                unit: 'minute',
                                unitDisplay: 'long'
                            }
                        )}
                    </span>
                </figcaption>
                <img
                    src={BASE_API_URL + image.url}
                    alt='постер фильма'
                    className='movie-card__picture'
                />
            </figure>
            <MovieCardButton
                typeSaved={typeSaved}
                typeDelete={typeDelete}
            />
        </div>
    );
}

export default MovieCard;