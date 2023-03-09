import React, { useState } from 'react';
import Nav from "../../components/NavBar/Navigation";
import revRat from "../../components/RevRat/RevRat";
import { Button, Card, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Admin.module.styles.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
    const closeBtn = document.querySelector(".close");
    const [data, setData] = useState({
        username: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData((prev) => ({ ...prev, [input.name]: input.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/deleteUser";
            const { data: res } = await axios.delete(url, data);
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
            <div>
            <form className={styles.form_container} >
                <input
                    type="text"
                    placeholder="Enter a username"
                    name="username"
                    onChange={handleChange}
                    value={data.username}
                    required
                    maxLength={25}
                />
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.blue_btn} onClick={handleSubmit}>
                    Delete
                </button>
            </form>
            </div>
        </>
    )
}

export default Admin