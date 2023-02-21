import React from 'react'
import Nav from "../NavBar/Navigation"
import Movie from "../Movie/Movie"
const MovieGrid = () => {
  return (
    <>
    <Nav/>
    <div>MovieGrid</div>
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