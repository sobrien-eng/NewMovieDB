import React from 'react'
import Nav from "../NavBar/Navigation";
import styles from "./styles.css";

const AllMovies = () => {
  return (
    <><Nav />

      <h1 className='title'>Movie Title</h1>
      <div className='main'>

        <div className='colOne'>

          <div className='movieBox'>
            <div class="heroMoviePoster">
              movie poster
              <img src=''/>
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
          </div>
        </div>
        <div className='colTwo'>
          <div className='movieDetails'>
            <div className='rowOne'>
              <div>Rating</div>
              <div>Run time</div>
              <div>Genre</div>
            </div>
            <div className='description'>Description</div>
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
  )
}

export default AllMovies