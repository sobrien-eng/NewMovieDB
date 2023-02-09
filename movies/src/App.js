import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from " react-router-dom";
import "bootstrap/css/bootstrap.min.css";
import './App.css';

import authService from "./services/authServices";
import register from "./components/register";
import login from "./components/login";
import home from "./components/home";
import movie from "./components/movie";
import admin from "./components/admin";
import profile from "./components/profile";
import authServices from "./services/authServices";


class App extends Component () {
    constructor(props) {
  super(props);
  this.logout= this.logout.bind(this);

  this.state = {
    showMovieInfo: false,
    showAdmin: false,
    showProfile: false,
    currentUser: undefined
  };
}
  updateStatus(){
    const user = authService.getCurrentUser();

    if (user){
      this.setState({
        currentUser: authService.getCurrentUser(),
        //showMovieInfo: user.roles.includes()
        //showProfile
        showAdmin: user.roles.includes("ROLE_ADMIN")
      });
    }
  }
  logout(){
    authService.logout();
  }
  render() {
    const  {currentUser, showAdmin} = this.state;
  //   return (
  //     <Router>
  //       <div>
  //         <nav className=""
  //       </div>
  //     </Router>
  // );
}
}

export default App;
