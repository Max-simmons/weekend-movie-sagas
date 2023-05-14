import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Details.css'

function DetailsPage() {
    const history = useHistory();

    const currentMovie = useSelector(state => state.detailsReducer);
    const genreTable = useSelector(state => state.genres)
    const movieID = currentMovie.id

    console.log('current movie', currentMovie);
    console.log('current ID', movieID);

let movieDetails = genreTable.filter(function (genre) {
    return genre.movie_id === movieID
});

let genres = movieDetails.map(function (detail) {
    return detail.genre
});

console.log('movie details',movieDetails);

console.log('genres', genres);


    
    
    const backToHome = () => {
       history.push('/');
    }
    return (
        <>
        
        <h2>{currentMovie.title}</h2>
        <img className = 'detailsImg' src={currentMovie.poster} alt={currentMovie.title}/>
        <h1 className='genres'>{genres.join(', ')}</h1>
        <p>{currentMovie.description}</p>
        <button className='homeButton' onClick = {backToHome} >Back to Home</button>
        </>
    );
}

export default DetailsPage;








