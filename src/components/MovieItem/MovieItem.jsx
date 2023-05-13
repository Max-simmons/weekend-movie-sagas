import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';



function MovieItem(props) {
    
    const history = useHistory();
    const [ movieId, setMovieId ] = useState('');

    // console.log(props.title);

    const handleClick = (movie) => {
        console.log('clicked', props.id);
        
        
        history.push('/details')
    }

    return(
        
        <div key={props.id} onClick={handleClick}>
             <h3>{props.title}</h3>
            <img src={props.poster} alt={props.title}/>
        </div>
        
    )
}


export default MovieItem;