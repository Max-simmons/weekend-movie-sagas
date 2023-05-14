import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieItem.css'

// This function will be responsible for displaying the movie items

function MovieItem(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [ movieId, setMovieId ] = useState('');

    // console.log(props.title);
// onClick the dispatch will send the current movie details selected to the redux store

    const handleClick = (movie) => {
        console.log('clicked', props.id);
        dispatch({
            type: 'DETAILS_PAGE',
            payload: {'id': props.id, 
                'title': props.title, 
                'poster': props.poster, 
                'description': props.description}
        })
        history.push('/details')
    }

    return(
        
        <div className= "movieCard" key={props.id} onClick={handleClick}>
             <img src={props.poster} alt={props.title}/>
             <div class="container">
             <h3>{props.title}</h3>
             </div>
        </div>
        
    )
}


export default MovieItem;