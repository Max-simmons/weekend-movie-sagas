const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log('in get');

  const query = `SELECT 
  movies.id AS movie_id, 
  genres.id AS genre_id, 
  genres.name AS genre 
  FROM movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id 
  JOIN genres ON genres.id = movies_genres.genre_id;`;
  
  pool.query(query)
    .then( result => {
      res.send(result.rows);
      console.log(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;