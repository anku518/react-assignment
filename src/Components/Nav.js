import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Nav() {

    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ffb329bcf788424594525446a2ed5de5`)
            .then(res => {
                console.log({
                    Google: res
                });
                setNews(oldData => res.data.articles)
            })
    }, [])


    return (
        <nav>
            <Link to = "/">
                <h4 className='mainPage'>Main Page</h4>
            </Link>
            <ul className="newsSection">
				<h3><b>Tech Crunch News Headlines</b></h3>
                {
                    (news && news.length > 0) ?
                        news.map(nws => {
                            return (
                                <li className="techApi">
                                    <h4><b><u>{nws.title}</u></b></h4>
                                    <h4><u>Source: </u>{nws.source.name}</h4>
                                    <h4><u>Publish: </u>{nws.publishedAt}</h4>
                                    <p>
										<a href={nws.url} target="_blank">Link to the source page</a>
									</p>
                                </li>
                            )
                        }) :
                        <li>Something went wrong.. OOPSSS <br/> Nothing to show </li>
                }
            </ul>
        </nav>
    )
}

export default Nav
