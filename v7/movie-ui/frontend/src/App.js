import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter, Switch, Redirect, render } from 'react-router-dom';
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
import AllMovies from "./components/AllMovies/AllMovies"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/NavBar/Navigation";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Container,
    Collapse,
    NavLink,

    NavbarBrand
} from 'reactstrap';
function App() {
	const user = localStorage.getItem("token");
	// const user = JSON.parse(localStorage.getItem('profile'));


  return (
		<div className="App">
   
   <>
      

    
    </>

	
			{/* <div className="blur" style={{ top: "-18%", right: "0" }}></div>
			<div className="blur" style={{ top: "80%", left: "-8rem" }}></div> */}
		<BrowserRouter>
			<Routes>
				{/* user && */}
			
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/allMovies" exact element={<AllMovies />} />

				{/* <Route path="/posts/:id" exact component={PostDetails} /> */}
			{/* <Route path={['/user/:name', '/topics/:name']} component={UsersAndTopics} /> */}
				<Route path="/" element={<Navigate replace to="/login" />} />
			</Routes>
			</BrowserRouter>
      
			

		</div>
	);
}

export default App