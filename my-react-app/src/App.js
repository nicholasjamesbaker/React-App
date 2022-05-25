import React, {useState, useEffect} from "react";
import './styles.css';
import {MoviePage, Home, MovieForm, MovieFormDisplay} from './pages';
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";

function App(){
  // "/addmovie section, adds movies"
  const [movieForm, updateMovieForm] = useState([]);

  const addMovie = (movie) => {
    updateMovieForm([...movieForm, movie]);
  };
  
  // "/movies section, displays movies"
  const [movies, setMovies] = useState(null);

  useEffect( () =>{

    //load json data
    // fetch("./movies.json")
    fetch("/api/data")
    .then ( response => response.json() )
    .then ( setMovies )
    .then ( console.log(movies))
    .catch (e => console.log(e.message) );
  }, [])

  return (
    <>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<MoviePage movies={movies} setMovies={setMovies}/>}/>
      <Route path="/addmovie" 
      element={
        <>
      <MovieForm addMovie={addMovie}/>
      <MovieFormDisplay movieForm={movieForm}/>
      </>
      }/>
    </Routes>
    </div>
    </>
  )
}

export default App;
