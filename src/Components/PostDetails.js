import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Blog from "./Blog";
import axios from 'axios';

function BlogDetails(props) {
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState({})

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/post/${postId}`, {
            headers: {
                "app-id": "61a1477f49b81680adbc0ba8"
            }
        }).then((res) => {
            console.log({
                Data: res
            });
            setPostDetails((oldState) => res.data)
        })
    }, [postId])


    return (
        <div className="blogDisplay">
            {
                postDetails ? <Blog postData={postDetails}></Blog> : ""
            }
        </div>
    )
}

export default BlogDetails;