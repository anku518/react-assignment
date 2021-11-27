import React from 'react'
import { Link } from 'react-router-dom'

function Blog(props) {

    return (
        <div className="details">
            <h1>
                <Link to={`/post-details/${props.postData.id}`}>{props.postData.text}</Link>
            </h1>


            <div className="postDetails">
                <div className="image"><img src={props.postData.image} alt={props.postData.text} srcSet="" /></div>
                {props.postData.tags ?
                    props.postData.tags.forEach(tag => {
                        <span className="pill">{tag}</span>
                    }) : ""
                }
                <p style={{ padding: "30px" }}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.</p>
            </div>
            <hr />
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
                <p className="postData">{new Date(props.postData.publishDate).toLocaleTimeString() + ' ' + new Date(props.postData.publishDate).toLocaleDateString()}</p>
                <span className="auth-img">
                    {
                        props.postData.owner ?
                            <img style={{ borderRadius: "40px", height: "30px", marginRight: "px" }} src={props.postData.owner.picture} alt="Author pic" srcSet="" /> :
                            ""
                    }
                </span>
                <p>
                    {
                        props.postData.owner ?
                            props.postData.owner.title + " " + props.postData.owner.firstName + " " + props.postData.owner.lastName
                            : ""
                    }
                </p>
            </span>
        </div>
    )
}

export default Blog
