import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
//import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
import Home from "./components/HomePage/Home";
import Admin from "./components/AdminPage/Admin"
import Movie from './components/Movie/Movie';
import MoviePage from './components/Moviepage/MoviePage';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Search from './components/SearchPage/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e&query";
const genre_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e&language=en-US";

function App() {
	//const user = localStorage.getItem("token");
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState('');

	const [movieGenre, setMovieGenre] = useState([]);


	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			})
	}, [])


	const searchMovie = async (e) => {
		e.preventDefault();
		console.log("Searching");
		try {
			const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);

			console.log("data.results");
			setMovies(data.results);
			console.log(movies);

			setMovies(data.results);

		}
		catch (e) {
			console.log(e);
		}
	}


	const searchMovieGenre = async (e) => {
		e.preventDefault();
		console.log("Searching");
		try {
			const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
			const res = await fetch(url);
			const data = await res.json();
			//console.log("data below");
			//console.log(data);
			console.log("");
			console.log(JSON.stringify(data, null, 2));
			setMovies(data.results);
			//console.log(data.results.genre_ids)
			//console.log(movies);
			for(const movie of movies){
				console.log(movie.genre_ids);
			}
		}
		catch (e) {
			console.log(e);
		}
	}



	const changeHandler = (e) => {
		setQuery(e.target.value);
	}
	return (
		<div className="App">
			<Nav/>

<BrowserRouter>
				<Routes>
					{/* user && */}
					{<Route path="/main" exact element={<Home />} />}
					<Route path="/signup" exact element={<Signup />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/admin" exact element={<Admin />} />
					<Route path="/search" exact element={<Search />} />
					<Route path="/movie/:id" exact element={<MoviePage />} />
					{/* <Route path={['/user/:name', '/topics/:name']} component={UsersAndTopics} /> */}
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
				</Routes>
			</BrowserRouter>
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

			<div>helo</div>
			<Form className="genres" onSubmit={searchMovieGenre}>
				<FormControl
					type="search"
					placeholder="Genre Search"
					name="query"
					value={query} onChange={changeHandler}></FormControl>
				<Button variant="secondary" type="submit">Find Genre</Button>
			</Form>


			<div>
				{/* <MovieGrid/> */}
				{/* {movies.length > 0 ? (
					<div className="container">
						<div className="grid">
							{movies.map((movieReq) =>
								<Movie key={movieReq.id} {...movieReq} />)}
						</div>
					</div>
				) : (
					<h2>No movies found</h2>
				)} */}
			</div>
		</div>
	);
}

export default App;
