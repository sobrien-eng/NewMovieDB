import { show, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Nav from "../NavBar/Navigation"
import { Link, useNavigate, useParams } from "react-router-dom";
import Movie from './../Movie/Movie'
import styles from "./styles.module.css";
import axios from "axios";
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';

import { RevRat } from '../RevRat/RevRat';
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "245b5a23f0b29a2cd2d2fd6c071bad5e";

const MoviePage = ({ title, poster_path, vote_Average, release_date, runtime, genre, overview, backdrop_path }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
        console.log(data);
    };


    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?api_key=${apiKey}&language=en-US`;
        getMovie(movieUrl);
    }, []);
    const closeBtn = document.querySelector(".close");
    const [data, setData] = useState({
        review: "",
        rating: "",
        movieId: id
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        // if (input.value.length === 250){
        //     window.alert("Cannot exceed 250 characters!")
        // }
        setData((prev) => ({ ...prev, [input.name]: input.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/movie/{id}";
            const { data: res } = await axios.post(url, data);
            console.log(data);
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };
    return (
        <div>
            {movie && (
                <>
                    <div className="card text-center bg-secondary mb-3">
                        <img className="card-img-top" style={{ width: '60%', }} src={API_IMG + movie.backdrop_path} />
                        <div className="card-body">
                            <div className="card-body">
                                <div className='colTwo'>
                                    <div className='movieDetails'>
                                        <div className='rowOne'>
                                            <h2>{movie.title}</h2>
                                            <div>
                                                <div className='description'>{movie.overview}</div>
                                            </div>
                                            <div>
                                                <div>{movie.vote_Average}</div>
                                                <div>{movie.release_date}</div>
                                                <div>{movie.genre_name}</div>
                                                <div>{movie.runtime} mins</div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='revRatForm'>
                                {/* <Form className="d-flex" onSubmit={handleSubmit} autoComplete="off">
                                    <FormControl
                                        type="text"
                                        placeholder="Review"
                                        className="col-xs-2"
                                       onChange={handleChange} maxLength={5}></FormControl>
                                    <FormControl
                                        type="number"
                                        placeholder="Rating"
                                        className="me-2"
                                       onChange={handleChange} maxLength={1}></FormControl>
                                    <Button variant="secondary" type="submit">+</Button>
                                </Form> */}
                                <form className={styles.form_container} onSubmit={handleSubmit}>
                                    <h1>Login to Your Account</h1>
                                    <input
                                        type="text"
                                        placeholder="Review"
                                        name="review"
                                        onChange={handleChange}
                                        value={data.review}
                                        required
                                        maxLength={5}
                                        className={styles.input}
                                    />
                                    <input
                                        type="number"
                                        placeholder="1-5"
                                        name="rating"
                                        onChange={handleChange}
                                        value={data.rating}
                                        required
                                        maxLength={1}
                                        className={styles.input}
                                    />
                                    {error && <div className={styles.error_msg}>{error}</div>}
                                    <button type="submit" className={styles.blue_btn}>
                                        +
                                    </button>
                                </form>
                            </div>
                            <div>
                                <RevRat />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MoviePage