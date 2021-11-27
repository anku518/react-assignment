import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';
// import Post from './Components/Post';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetails from './Components/PostDetails';

function App() {

  const [posts, setPosts] = useState({});

  useEffect(() => {
    return fetch('https://dummyapi.io/data/v1/tag/water/post?limit=8', {
      headers: {
        "app-id": "61a1477f49b81680adbc0ba8"
      }
    }).then(data => {
      data.json().then(p => {
        setPosts(oldPosts => {
          return p.data
        })
      })
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <section className="mainbody">
          <Switch>
            <Route path="/" exact={true}>
              <Main posts={posts}>
              </Main>
            </Route>
            <Route path="/post-details/:postId" exact={true}>
              <PostDetails/>
            </Route>
          </Switch>
          <Nav></Nav>
        </section>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
