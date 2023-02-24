//import { show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
import Nav from "../NavBar/Navigation"
const API_IMG="https://image.tmdb.org/t/p/w500/";
const Movie = ({title, poster, vote_Average, release_date, genre, overview, runTime}) => {
  const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
  return (
    <>
    <Nav/>
    <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              {/* <img className="card-img-top" src={API_IMG+poster_path} /> */}
              <div className="card-body">

                      {/* <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} /> */}
                      <h3>{title}</h3>
                      <h4>{vote_Average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      
              </div>
            </div>
        </div>
    </>
  )
}

export default Movie