import React from "react";

import "./AboutPage.css"

export default function AboutPage() {
    return(
        <div className="about">
            <body className="about-body">
                <div className="content">
                    <h1>About Me and My App</h1>
                    <p>
                        Hello my name is Farhan, a computer engineering student at Diponegoro University.<br/>
                        <span>redditnotreddit</span> is created as a final assignment in my Mobile Device Programming course.<br/>
                        I choose ReactJS because its the lightest to run on my friend's laptop (my laptop broke)<br/>
                        and Reddit API because i am familiar with how Reddit store their data. I've created a <a href="https://github.com/Hanndot/CoolRedditBot" target="_blank" rel="noreferrer"> discord bot</a><br/>
                        that can fetch a Reddit post in a desired subredddit. This project is an open-source project, you<br/>
                        can see the source code <a href="https://github.com/Hanndot/redditnotreddit" target="_blank" rel="noreferrer">here</a>.
                    </p>
                </div>
            </body>
        </div>
    );
}