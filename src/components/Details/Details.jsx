import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Details.css'



function DetailsPage() {
    const history = useHistory();

    // calling the store to get the current state of the movie and the potential genres 

    const currentMovie = useSelector(state => state.detailsReducer);
    const genreTable = useSelector(state => state.genres)
    const movieID = currentMovie.id

    console.log('current movie', currentMovie);
    console.log('current ID', movieID);

    // function to filter out the genre ids that match the movie ID

let movieDetails = genreTable.filter(function (genre) {
    return genre.movie_id === movieID
});

    // function to filter out just the genres from the objects 

let genres = movieDetails.map(function (detail) {
    return detail.genre
});

console.log('movie details',movieDetails);

console.log('genres', genres);

    // history.push will send us back to the home page 
    
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








