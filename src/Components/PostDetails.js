import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Post from "./Post";
import axios from 'axios';

function PostDetails(props) {
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
        <div className="postContainer">
            {
                postDetails ? <Post postData={postDetails}></Post> : ""
            }
        </div>
    )
}

export default PostDetails;