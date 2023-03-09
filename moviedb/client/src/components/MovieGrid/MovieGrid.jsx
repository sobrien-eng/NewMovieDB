import React, { useState, useEffect } from 'react';
import Nav from "../NavBar/Navigation"
import Movie from "../Movie/Movie"
import './styles.css';
import { Form, FormControl, Button } from 'react-bootstrap';
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e&query";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [genreId, setGenreId] = useState(0);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      
      setMovies(data.results);
    })
  }, [])

  const searchGenre = async(e)=>{
    e.preventDefault();
    console.log("Searching Movie");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();


 var test =[];      

//  var oof = data.results.genre_ids;
//  test.push(oof);
//  console.log(test);

for(i=0; i<data.results.length; i++){
  var oof = data.results[i].genre_ids;
  //test.push(oof);
}
console.log(oof);
      let genreContent = document.getElementById("genreContent");
      let selection = genreContent.value;
      filterByGenre(selection);

      let foundMovies = [];
      if (genreId != 0) {
      for (var i = 0; i < data.results.length; i++) {
        if(data.results[i].genre_ids.includes(genreId)) {
          foundMovies.push(data.results[i])
        }
      }
    } else {
      for (var i = 0; i < data.results.length; i++) {
        foundMovies.push(data.results[i])
      }
    }
    
      setMovies(foundMovies);
    }
    catch(e){
      console.log(e);
    }
  }
  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching Movie");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();


 var test =[];      

//  var oof = data.results.genre_ids;
//  test.push(oof);
//  console.log(test);

for(i=0; i<data.results.length; i++){
  var oof = data.results[i].genre_ids;
  //test.push(oof);
}
console.log(oof);
      let genreContent = document.getElementById("genreContent");
      let selection = genreContent.value;
      filterByGenre(selection);

      let foundMovies = [];
      if (genreId != 0) {
      for (var i = 0; i < data.results.length; i++) {
        if(data.results[i].genre_ids.includes(genreId)) {
          foundMovies.push(data.results[i])
        }
      }
    } else {
      for (var i = 0; i < data.results.length; i++) {
        foundMovies.push(data.results[i])
      }
    }
    
      setMovies(foundMovies);
    }
    catch(e){
      console.log(e);
    }
  }

  const searchActor = async(e)=>{
    e.preventDefault();
    console.log("Searching Person");
    try{
      const url=`https://api.themoviedb.org/3/search/person?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log('search actor' + data);
      let genreContent = document.getElementById("genreContent");
    
      let selection = genreContent.value;

      filterByGenre(selection);
      
      let foundMovies = [];

      if(genreId == 0) {
        for (var i = 0; i < data.results.length; i++) {
          if(data.results[i].known_for_department == 'Acting') {
            for(var j = 0; j < data.results[i].known_for.length; j++) {
              foundMovies.push(data.results[i].known_for[j]);
            }
          }
        }
      } else {
          for (var i = 0; i < data.results.length; i++) {
            if(data.results[i].known_for_department == 'Acting') {
              for(var j = 0; j < data.results[i].known_for.length; j++) {
                if (data.results[i].known_for[j].genre_ids.includes(genreId)) {
                  foundMovies.push(data.results[i].known_for[j]);
              }
            }
          }
        } 
      }  

      setMovies(foundMovies);
  
    }
    catch(e){
      console.log(e);
    }

    return (
      <div>
        
      </div>
    )
  }

  function filterByGenre(option) {

    if(option == "Action") {
      setGenreId(28);
    }
    if(option == "Adventure") {
      setGenreId(12);
    }
    if(option == "Animation") {
      setGenreId(16);
    }
    if(option == "Comedy") {
      setGenreId(35);
    }
    if(option == "Crime") {
      setGenreId(80);
    }
    if(option == "Documentary") {
      setGenreId(99);
    }
    if(option == "Drama") {
      setGenreId(18);
    }
    if(option == "Family") {
      setGenreId(10751);
    }
    if(option == "Fantasy") {
      setGenreId(14);
    }
    if(option == "History") {
      setGenreId(36);
    }
    if(option == "Horror") {
      setGenreId(27);
    }
    if(option == "Music") {
      setGenreId(10402);
    }
    if(option == "Mystery") {
      setGenreId(9648);
    }
    if(option == "Romance") {
      setGenreId(10749);
    }
    if(option == "Science Fiction") {
      setGenreId(878);
    }
    if(option == "TV Movie") {
      setGenreId(10770);
    }
    if(option == "Thriller") {
      setGenreId(53);
    }
    if(option == "War") {
      setGenreId(10752);
    }
    if(option == "Western") {
      setGenreId(37);
    } 
    if(option == "Any Genre") {
      setGenreId(0);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Form className="d-flex" autoComplete="off">
				<FormControl
					type="search"
					placeholder="Movie Search"
					className="me-2"
					aria-label="search"
					name="query"
					value={query} onChange={changeHandler}></FormControl>
          
				<div class="dropBtn" variant="secondary" type="submit">
          <div className='buttons'>
            <Button className='button' onClick={searchMovie} type="submit">Search by Title</Button>
            <Button className='button' onClick={searchActor} type="submit">Search by Actor</Button>
            <Button className='button' onClick={searchGenre} type="submit">Search by Genre</Button>

          </div>
        
          <select id="genreContent" class="dropdown-content">
              <option value="Any Genre" name="Any Genre">Any Genre</option>
              <option value="Action" name="Action">Action</option>
              <option value="Adventure" name="Adventure">Adventure</option>
              <option value="Animation" name="Animation">Animation</option>
              <option value="Comedy" name="Comedy">Comedy</option>
              <option value="Crime" name="Crime">Crime</option>
              <option value="Documentary" name="Documentary">Documentary</option>
              <option value="Drama" name="Drama">Drama</option>
              <option value="Family" name="Family">Family</option>
              <option value="Fantasy" name="Fantasy">Fantasy</option>
              <option value="History" name="History">History</option>
              <option value="Horror" name="Horror">Horror</option>
              <option value="Music" name="Music">Music</option>
              <option value="Mystery" name="Mystery">Mystery</option>
              <option value="Romance" name="Romance">Romance</option>
              <option value="Science Fiction" name="Science Fiction">Science Fiction</option>
              <option value="TV Movie" name="TV Movie">TV Movie</option>
              <option value="Thriller" name="Thriller">Thriller</option>
              <option value="War" name="War">War</option>
              <option value="Western" name="Western">Western</option>
          </select>
        </div>
			</Form>
  

    <div>
      {movies.length > 0 ?(
        <div className="container">
          <div className="grid">
            {movies.map((movieReq)=>
            <Movie key={movieReq.id} {...movieReq}/>)}
          </div>
        </div>
      ):(
        <h2>No Results Found</h2>
      )}

    <div>

    </div>

    </div>
    </>
  )
}

export default MovieGrid