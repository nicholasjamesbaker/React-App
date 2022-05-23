import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home(){
    return (
        <div id="welcome">
        <b>Welcome to Nick's Movie Reviews!</b>
        <br></br>
        <img src={"images/film.jpg"} width="835" height="466"></img>
        </div>
    );
}

export function MoviePage({movies, setMovies}) {
  return (
      <div id="reviews">
          <h1><b>Nick's Movie Reviews</b></h1>
          <MovieList movies={movies} onRemoveMovie = {
                  movieName => {const newMovies = movies.filter(movie => movie.name !== movieName);
                    setMovies(newMovies);}}/>
      </div>
  );
}

export function MovieList( { movies = [], onRemoveMovie = f => f}) {
  if  ( movies == null || movies == undefined) 
        return <h2>No movies available</h2>;

  return (
      <div>
          {movies.map( movie => {
              return <Movie key={movie.name} {...movie} onRemove={onRemoveMovie} />
      })}
      </div>
  );
}

export function Movie({name, date, actors, poster, rating, onRemove = f => f}) {
  return (
    <>
    <br></br>
    <img src={poster} width="276" height="500"></img>
    <h2><b>{name}</b></h2> 
    <h3>Release Date: {date}</h3>
    <h3>Starring: {actors.join(', ')} </h3>
    <h3>Rating: {rating} out of 5</h3>
    <button onClick={() => onRemove(name)}>Remove movie</button>
    <br></br>
    </>
  )
}

export function MovieForm({addMovie}) {

  const [movies, setMovies] = useState({
    name: "",
    date: "",
    actors: "",
    poster: "",
    rating: ""
  });

  const handleChange = (event) => {
    setMovies({ ...movies, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(movies);
    setMovies({ name: "", date: "", actors: "" , poster: "", rating: ""});
  };

  return (
    <div id="addmovie">
    <div className="myForm">
      <form onSubmit={handleSubmit}>
        <div>
          <h1><b>Add a Movie Review</b></h1>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Movie name"
            value={movies.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="date"
            placeholder="Release date"
            value={movies.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="actors"
            placeholder="Actors"
            value={movies.actors}
            onChange={handleChange}
            required
          />
        </div>
          <select 
          name="poster"
          value={movies.poster}
          onChange={handleChange}>
            <option value="images/poster_placeholder.png">Placeholder Image</option>
            <option value="images/thumbs_up.png">Thumbs Up</option>
            <option value="images/thumbs_down.png">Thumbs Down</option>
          </select>
          <div>
          <input
            type="text"
            name="rating"
            placeholder="Rating (_ out of 5)"
            value={movies.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button>Add Movie</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export function MovieFormDisplay({movieForm}) {
  return (

    <div id="addmovie">
      <br></br>
      {movieForm.map((movie) => (
        <>
        {console.log("test")}
        <img src={movie.poster} width="276" height="500"></img>
        <h2><b>{movie.name}</b></h2> 
        <h3>Release Date: {movie.date}</h3>
        <h3>Starring: {movie.actors} </h3>
        <h3>Rating: {movie.rating} out of 5</h3>
        </>
      ))}
    
    </div>
  );
}