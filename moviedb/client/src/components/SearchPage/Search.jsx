import React, { useState, useEffect } from 'react';
import Movie from "../Movie/Movie"
import { Form, FormControl, Button } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=245b5a23f0b29a2cd2d2fd6c071bad5e&query";
const Search = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

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
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
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
            <div>
                {movies.length > 0 ? (
                    <div className="container">
                        <div className="grid">
                            {movies.map((movieReq) =>
                                <Movie key={movieReq.id} {...movieReq} movie={movieReq} />)}
                        </div>
                    </div>
                ) : (
                    <h2>No movies found</h2>
                )}
            </div>
        </>
    )
}

export default Search