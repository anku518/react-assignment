import React from 'react'
import { Link } from 'react-router-dom'

function Post(props) {

    return (
        <div className="card">
            <h1>
                <Link to={`/post-details/${props.postData.id}`}>{props.postData.text}</Link>
            </h1>


            <div className="post-foot">
                <div className="fakeimg"><img src={props.postData.image} alt={props.postData.text} srcSet="" /></div>
                {props.postData.tags ?
                    props.postData.tags.forEach(tag => {
                        <span className="pill">{tag}</span>
                    }) : ""
                }
                <p style={{ padding: "30px" }}> <b>Lorem ipsum - </b> Dolor sit amet, consectetuer adipiscing elit. Nullam <em>dictum</em> felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br/> Aenean <em>commodo ligula</em> eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla <b>consequat massa</b> quis enim.</p>
            </div>
            <hr />
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
                <p className="post-date">{new Date(props.postData.publishDate).toLocaleTimeString() + ' ' + new Date(props.postData.publishDate).toLocaleDateString()}</p>
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

export default Post
