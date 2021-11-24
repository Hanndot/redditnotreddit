import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

export default function HomePage() {
    return(
        <div className="home">
            {/* <header className="header">
                <Link className="about-link" to='/about'>about</Link>
            </header> */}
            <body className="body">
                <h1>Hi, Welcome to</h1>
                <h3>redditnotreddit</h3>
                <Link className="search-link" to='/search'>Start searching!</Link>
            </body>
        </div>
        
    );   
}