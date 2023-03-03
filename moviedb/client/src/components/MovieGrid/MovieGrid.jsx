import React, { useState, useEffect } from 'react';
import Nav from "../NavBar/Navigation"
import Movie from "../Movie/Movie"
import { Form, FormControl, Button } from 'react-bootstrap';
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e&query";
const MovieGrid = () => {
  const [movies, setMovies]=useState([]);
  //const [people, setPeople]=useState([]);
  const [query, setQuery]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching Movie");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
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
      
      let foundMovies = [];

      for (var i = 0; i < data.results.length; i++) {
        if(data.results[i].known_for_department == 'Acting') {
          for (var j = 0; j < data.results[i].known_for.length; j++) {
            foundMovies.push(data.results[i].known_for[j]);
          }
        }
      }
      setMovies(foundMovies);
      console.log(foundMovies);
      console.log(data.results);
    }
    catch(e){
      console.log(e);
    }

    return (
      <div>
        
      </div>
    )
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
          <div id="myDropdown" class="dropdown-content">
            <Button variant="secondary" onClick={searchMovie} type="submit">Search by Movie</Button>
            <Button variant="secondary" onClick={searchActor} type="submit">Search by Actor</Button>
          </div>
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