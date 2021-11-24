import React from "react";
import { Link } from "react-router-dom";

import "./Articles.css";

export default function Articles({ article, index, sr }){
    return (
       <article className="articles-card">
           <img className="thumbnail" alt="Thumbnail" src={article.thumbnail}></img>
           <div className="article-data">
                <p id="sr">{article.subreddit_name_prefixed} | {article.score} upvotes.</p>
                <Link className="detail-link" to={`/post/${sr}/${index}`} >{article.title}</Link>
           </div>
       </article>
    );
}

// TODO Image conditional render