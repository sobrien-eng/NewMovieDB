import React, { useState, useEffect } from 'react'
import "./styles.css";
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Admin from '../AdminPage/Admin';
import Home from "../HomePage/Home";
import MoviePage from "../Moviepage/MoviePage";
const Navigation = () => {
   
    return (
        // <nav class="navbar navbar-expand-lg navbar-light">
        //     <div class="container-fluid">
        //         <Link to="/" class="navbar-brand">
        //             MovieDB
        //         </Link>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        //                 <li class="nav-item">
        //                     <Link to="/movie" class="nav-link">
        //                         Movie
        //                     </Link>
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link to="/admin" class="nav-link">
        //                         Admin
        //                     </Link>
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link to="/login" class="nav-link">
        //                         Logout
        //                     </Link>
        //                 </li>


        //             </ul>
                   
        //         </div>
        //     </div>
        // </nav>
        <Navbar expand="lg" sticky='top' variant='light'>
        <Container>
        <Navbar.Brand href="/main">Moviedb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/movie">Movie</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
               <Nav.Link href="/login">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation