import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./SearchPage.css";
import Articles from "../components/Articles";

export default function SearchPage() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubredit] = useState("all");
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        fetch("https://www.reddit.com/r/"+ subreddit +".json")
            .then(res => {
                setisLoading(true);
                if(res.status !== 200) {
                    console.log("An error has occured");
                    setisLoading(false);
                }

                res.json().then(data => {
                    if (data !== null) {
                        // console.log(data);
                        setArticles(data.data.children);
                        setisLoading(false);
                        setisLoaded(true);
                        console.log(articles);
                    }
                });
            })
            // if (!isLoaded) {
            //     fetch(subreddit);
            // }

    }, [subreddit, isLoaded]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            setisLoaded(false);
            setSubredit(e.target.value);
        }
    };

    return(
        <div className="search">
            <header className="search-header">
                <input type="text" className="input" placeholder="all" onKeyDown={(e) => onSearch(e)}></input>
            </header>
            <div className="articles">
                {
                    (articles !== null) ? articles.map((article, index) => {
                        return(
                            <Articles key={index} article={article.data} />
                        )
                    }) : <p>Subreddit is Unavailable</p>
                }
            </div>
        </div>
    );
}

// TODO Change Articles to Posts
// TODO Add loading indicator
// TODO Add error indicator
// Add styling to article card