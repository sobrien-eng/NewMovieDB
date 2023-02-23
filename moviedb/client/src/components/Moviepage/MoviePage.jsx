import { show, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Nav from "../NavBar/Navigation"
import { Link, useNavigate } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MoviePage = ({ title, poster_path, vote_Average, release_date, genre, overview, backdrop_path }) => {

    return (
        <>

            <div className="card text-center bg-secondary mb-3">
                {/* <div><img src={backdrop_path}/></div> */}
                <div className="card-body">
                    <div className="card-body">

                        <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + poster_path} />
                        <h3>

                            {title}

                        </h3>
                        <h4>{vote_Average}</h4>
                        <h4>{genre}</h4>
                        <h5>Release Date: {release_date}</h5>
                        <br></br>
                        <h6>Overview:</h6>
                        <p>{overview}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviePage