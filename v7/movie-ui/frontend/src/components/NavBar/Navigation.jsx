import React from 'react'
import styles from "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Admin from '../AdminPage/Admin';
import AllMovies from "../AllMovies/AllMovies";
const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <Link to="/allMovies" class="navbar-brand">
						MovieDB
					</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                       
                        <li class="nav-item">
                        <Link to="/" class="nav-link">
						Account
					</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/admin" class="nav-link">
						Admin
					</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/" class="nav-link">
						Logout
					</Link>
                        </li>
                       
                       
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navigation