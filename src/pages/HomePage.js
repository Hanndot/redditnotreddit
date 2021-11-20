import React from "react";
import "./HomePage.css";

export default function HomePage() {
    return(
        <div className="home">
            <header className="header">
                <a type="text" href="/about">about</a>
            </header>
            <body className="body">
                <h1>Hi, Welcome to</h1>
                <h3>redditnotreddit</h3>
                <a type="text" href="/">Start searching!</a>
            </body>
        </div>
        
    );   
}