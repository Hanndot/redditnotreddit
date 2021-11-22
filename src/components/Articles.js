import React from "react";
import "./Articles.css";

export default function Articles({ article }){
    return (
       <article className="articles-card">
           <img className="thumbnail" alt="Thumbnail" src={article.thumbnail}></img>
           <div className="article-data">
                <p id="sr">{article.subreddit_name_prefixed} | {article.score} upvotes</p>
                <a id="title" href="#">
                        {article.title}
                </a>
           </div>
       </article>
    );
}

// TODO Image conditional render