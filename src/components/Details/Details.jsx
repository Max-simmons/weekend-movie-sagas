import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        <img src={currentMovie.poster} alt={currentMovie.title}/>
        <h1>{genres.join(', ')}</h1>
        <p>{currentMovie.description}</p>
        <button onClick = {backToHome} >Back to Home</button>
        </>
    );
}

export default DetailsPage;








