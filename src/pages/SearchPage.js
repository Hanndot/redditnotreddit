import React, { useState, useEffect } from "react";
import axios from "axios";
import Articles from "../components/Articles";

import "./SearchPage.css";

export default function SearchPage() {
    const [articles, setArticles] = useState(null);
    const [subreddit, setSubreddit] = useState("all");
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        // fetch(`https://www.reddit.com/r/${subreddit}.json`)
        //     .then(res => {
        //         setisLoading(true);
        //         if(res.status !== 200) {
        //             console.log("An error has occured");
        //             setisLoading(false);
        //         }

        //         res.json().then(data => {
        //             if (data !== null) {
        //                 // console.log(data);
        //                 setArticles(data.data.children);
        //                 setisLoading(false);
        //                 setisLoaded(true);
        //                 console.log(articles);
        //                 // console.log(articles[4]);
        //             }
        //         });
        //     })
        //     if (!isLoaded) {
        //         fetch(subreddit);
        //     }

        const fetchData = async (subreddit) => {
            setisLoading(true);
            try {
                const response = await axios.get(
                    "https://reddit3.p.rapidapi.com/subreddit",
                    {
                        params: {url: `https://www.reddit.com/r/${subreddit}`},
                        headers: {
                            'x-rapidapi-host': 'reddit3.p.rapidapi.com',
                            'x-rapidapi-key': 'fd9876de60msh35d92061c089822p133649jsn8525238494f6'
                        }
                    }
                );
                if (response.status === 200) {
                    setArticles(response.data.posts);
                    setisLoading(false);
                    setisLoaded(true);
                    console.log(articles);
                }
            } catch (err) {
                console.log(err);
                setisLoading(false);
            }
        };

        if (!isLoaded) {
            fetchData(subreddit);
        }

    }, [subreddit, isLoaded]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            setisLoaded(false);
            setSubreddit(e.target.value);
        }
    };

    return(
        // <div className="search">
        //     <header className="search-header">
        //         <input type="text" className="input" placeholder="all" onKeyDown={(e) => onSearch(e)}></input>
        //     </header>
        //     <div className="articles">
        //         {
        //             (articles !== null) ? articles.map((article, index) => {
        //                 return(
        //                     <Articles key={index} article={article.data} index={index} sr={subreddit} ></Articles>
        //                 )
        //             }) : <p>Subreddit is Unavailable</p>
        //         }
        //     </div>
        // </div>
        <div className="search">
            <header className="search-header">
                <input type="text" className="input" placeholder="all" onKeyDown={(e) => onSearch(e)}></input>
            </header>
            <div className="articles">
                {
                    (articles !== null) ? articles.map((article, index) => {
                        return(
                            <>
                                <Articles key={index} article={article} index={index} sr={subreddit} ></Articles>
                            </>
                        )
                    }) : <p className="loading">Loading ......</p>
                }
            </div>
        </div>
    );
}