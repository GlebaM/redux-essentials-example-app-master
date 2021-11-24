import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostsList from '../src/features/posts/PostsList'
import AddPostForm from '../src/features/posts/AddPostForm'
// import Anything from '../src/features/any/Anything'
// import Container from '../src/features/any/Container'
// import Practice from '../src/features/any/Practice'
// import Comics from '../src/features/any/Comics'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <AddPostForm />
                <PostsList />
              </Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      {/* <Container>
        <Anything />
        <Practice />
        <Comics />
      </Container> */}
      <div className="divv">
        <p className="parra"></p>
      </div>
    </Router>
  )
}

export default App
