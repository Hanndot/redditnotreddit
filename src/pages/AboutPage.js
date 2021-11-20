import React from "react";
import "./AboutPage.css"

export default function AboutPage() {
    return(
        <div className="about-pg">
            <header className="about-header">
                <a type="text" href="/">go back</a>
            </header>
            <body className="about-body">
                <div className="content">
                    <h1>About Me and My App</h1>
                    <p>
                        Hello my name is M. Farhan Athaullah, a computer engineering student at Diponegoro University.<br/>
                        <span>redditnotreddit</span> is created as a final assignment in my Mobile Device Programming course.<br/>
                    </p>
                </div>
            </body>
        </div>
    );
}