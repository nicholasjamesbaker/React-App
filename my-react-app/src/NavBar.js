import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";
// import {Navbar, Nav, Container} from 'react-bootstrap';

export default function NavBar(){

    return(
          <div className="navbar">
            <div className="logo">Nick's Movie Reviews</div>
             <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/addmovie">Add Movie</Link>
             </ul>
          </div>
    );
  
  }