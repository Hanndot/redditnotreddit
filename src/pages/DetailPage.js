import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import Postdetail from "../components/PostDetail";

import "./DetailPage.css"

export default function DetailPage() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  let pathLoc = usePathname();
  const postIndex = pathLoc.split("/");
  let srName = postIndex[2];
  let indexForFetch = postIndex[3];

  const [post, setPost] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${srName}.json`)
            .then(res => {
                setisLoading(true);
                if(res.status !== 200) {
                    console.log("An error has occured");
                    setisLoading(false);
                }

                res.json().then(data => {
                    if (data !== null) {
                        setPost(data.data.children[indexForFetch]);
                        setisLoading(false);
                        setisLoaded(true);
                        console.log(post)
                    }
                });
            })
  }, [isLoaded]);

  return(
    <div className="detail">
      <Postdetail post={post.data} />
    </div>
  );
}
