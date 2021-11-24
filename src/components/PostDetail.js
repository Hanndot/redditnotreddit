import React from "react";

import "./PostDetail.css";

export default function Postdetail( {post} ) {
    return(
        (post === undefined) ? <p>Loading....</p> :
            <article className="post-detail">
                <p className="post-title">{post.title}</p>
                {
                    (post.preview === null) ? "" : 
                        <figure >
                            <img src={post.url} alt="" className="post-image"></img>
                        </figure>
                }
                {
                    (post.is_video === false) ? "" :
                        <figure>
                            <video controls className="post-video">
                                <source src={post.secure_media.reddit_video.fallback_url} type="video/mp4"></source>
                            </video>
                        </figure>
                }
                {
                    (post.selftext_html === null) ? "" :
                        <p className="post-selftext">
                            {post.selftext}
                        </p>
                }
            </article>
        
    );
}