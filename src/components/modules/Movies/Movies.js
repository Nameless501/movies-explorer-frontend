import { useState, useEffect } from 'react';
import moviesList from '../../../utils/moviesList.json';
import savedMoviesList from '../../../utils/savedMoviesList.json'
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import Preloader from '../../UI/Preloader/Preloader';
import './Movies.css';

function Movies() {
    const [isLoading, setLoadingState] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoadingState(false), 1000);
    }, [])

    return (
        <section className='movies'>
            {isLoading ?
                <Preloader />
                :
                <>
                    <MoviesList
                        moviesList={moviesList}
                        savedMoviesList={savedMoviesList}
                    />
                    <MoreButton />
                </>
            }
        </section>
    );
}

export default Movies;