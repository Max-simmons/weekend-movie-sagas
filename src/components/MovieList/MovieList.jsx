import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES'})
    }, []);

    // called the store for the genres and the movie details 

    return (
        <main>
            <div className='movieList'>
            <img className = 'popcorn' src='/images/popcorndude.jpeg' alt= "popcorn person"/>
            <h1 className= 'heading'>Movie List</h1>
            </div>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem 
                        id={movie.id} 
                        title = {movie.title}  
                        poster = {movie.poster}
                        description = {movie.description}  
                                          
                        />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;