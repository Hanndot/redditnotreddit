import React from "react";

import "./SubredditList.css";

export default function SubredditList({ data }) {
    return (
        <div className="subreddit-name">
            <a href={`https://reddit.com/${data.display_name_prefixed}`} target="_blank" rel="noreferrer" >
                {data.display_name_prefixed}
            </a>
        </div>
    )
}