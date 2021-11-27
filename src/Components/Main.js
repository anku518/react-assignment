import React from 'react'
import Blog from './Blog'

function Main(props) {

    console.log({
        propPost: props.posts
    });

    return (
        <main>
            <div className="mainContainer">
                {
                    props.posts.length > 0 ?
                        props.posts.map(post => {
                            return <Blog postData={post} ></Blog>
                        })
                        : ""
                }
            </div>
        </main>
    )
}

export default Main
