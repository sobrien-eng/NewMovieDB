import { show, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Nav from "../NavBar/Navigation"
import { Link, useNavigate } from "react-router-dom";
import "./styles.css"
const API_IMG="https://image.tmdb.org/t/p/w500/";
const Movie = ({title, poster_path, vote_Average, release_date, genre, overview, backdrop_path,movie}) => {

  return (
    <>

      <div className="card text-center bg-secondary mb-3">
        {/* <div><img src={backdrop_path}/></div> */}
        <div className="card-body">
          <div className="card-body">

            <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + poster_path} />
            <h3>
              <Link to={`/movie/${movie.id}`}>
                {title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie