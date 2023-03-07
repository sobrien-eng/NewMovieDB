import React, { useState } from 'react';
import Nav from "../../components/NavBar/Navigation";
import revRat from "../../components/RevRat/RevRat";
import { Button, Card, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Admin.module.styles.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
    const [data, setData] = useState({
		username: "",
	});
	const [error, setError] = useState("");
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/findUser";
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
        <>
            <Nav />
            <form class="container-fluid" onSubmit={handleSearch}>
                <div class="input-group">
                    <div className='labelText'></div>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} value={data.username} required />
                </div>
                
            </form>
        </>
    )
}

export default Admin