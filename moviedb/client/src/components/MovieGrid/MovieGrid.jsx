import React from 'react'
import Nav from "../NavBar/Navigation"
import Movie from "../Movie/Movie"
<<<<<<< Updated upstream
const MovieGrid = () => {
  return (
    <>
    <Nav/>
    <div>MovieGrid</div>
=======
import { Form, FormControl, Button } from 'react-bootstrap';
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e&query";

const MovieGrid = () => {
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  const [genre, setGenre] = useState([]);

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
    console.log("Searching");
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

  const searchGenre = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url="https://api.themoviedb.org/3/genre/movie/list?api_key=684c906719eae2dd59c8b6aa6f78370d&language=en-US";
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  const changedHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>

    <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
				<FormControl
					type="search"
					placeholder="Movie Search"
					className="me-2"
					aria-label="search"
					name="query"
					value={query} onChange={changeHandler}></FormControl>
				<Button variant="secondary" type="submit">Search</Button>
			</Form>

      <Form className="e-flex" onSubmit={searchGenre} autoComplete="off">
				<FormControl
					type="search"
					placeholder="Genre Search"
					className="me-2"
					aria-label="search"
					name="query"
					value={query} onChange={changedHandler}></FormControl>
				<Button variant="secondary" type="submit">Search</Button>
			</Form>
  
>>>>>>> Stashed changes
    <div>
      {/* {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <Movie key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>No movies found</h2>
      )} */}
    </div>
    </>
  )
}

export default MovieGrid