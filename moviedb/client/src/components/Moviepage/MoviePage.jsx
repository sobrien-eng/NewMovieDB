import { show, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Nav from "../NavBar/Navigation"
import { Link, useNavigate, useParams } from "react-router-dom";
import Movie from './../Movie/Movie'
import styles from "./styles.module.css";

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

    return (
        <div>
            <Nav/>
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
                                <form>
                                    <div class="input-group">
                                        <span class="input-group-text">Review:</span>
                                        <textarea class="form-control" aria-label="..."></textarea>
                                    </div>
                                    <div className='ratingGroup'>
                                        <span class="input-group-text" id='rating'>Rating:</span>
                                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <div id="ratingNums" class="btn-group me-2" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-primary">1</button>
                                                <button type="button" class="btn btn-primary">2</button>
                                                <button type="button" class="btn btn-primary">3</button>
                                                <button type="button" class="btn btn-primary">4</button>
                                                <button type="button" class="btn btn-primary">5</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="white_btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div>
                                review
                                <br />
                                review
                                <br />
                                review
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MoviePage