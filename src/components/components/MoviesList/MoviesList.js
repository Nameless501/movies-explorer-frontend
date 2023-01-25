import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

function MoviesList({ moviesList, savedMoviesList = false, isSavedMoviesPage = false }) {
    const [cardsCount, setCardsCount] = useState(12);

    useEffect(() => {
        function handleResize() {
            const renderCount = window.innerWidth > 1023 ? 12 : window.innerWidth > 767 ? 8 : 5;
            setCardsCount(renderCount);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <ul className='movies-list' >
            {moviesList.slice(0, cardsCount).map(currentMovie => {
                return (
                    <li key={currentMovie.id} >
                        <MovieCard
                            {...currentMovie}
                            typeSaved={savedMoviesList ?
                                savedMoviesList.some(savedMovie => savedMovie.id === currentMovie.id) : false
                            }
                            typeDelete={isSavedMoviesPage}
                        />
                    </li>
                )
            })
            }
        </ul>
    );
}

export default MoviesList;