import React, { useState, useEffect } from "react";
import SubredditList from "../components/SubredditList";

import "./SrList.css";

export default function SrList() {
    const [data, setData] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        fetch("https://www.reddit.com/subreddits.json")
            .then(res => {
                setisLoading(true);
                if (res.status !== 200) {
                    console.log("eror lah pokoknya gatau dah males gw capek banget");
                    setisLoading(false);
                }

                res.json().then(sr =>{
                    if (sr !== null) {
                        setData(sr.data.children);
                        setisLoading(false);
                        setisLoaded(true);
                        console.log(data);
                    }
                })
            })
    },[])

    return (
        <div className="srlist">
            <h1>Popular Subreddit List</h1>
            <div className="subreddit-list">
                {
                    (data !== null) ? data.map((item, index) => {
                        return (
                            <SubredditList key={index} data={item.data} ></SubredditList>
                        )
                    }) : <p>Loading....</p>
                }
            </div>
        </div>
    )
}