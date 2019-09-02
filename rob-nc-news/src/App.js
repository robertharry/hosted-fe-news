import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router'
import Header from './components/Header';
import Home from './components/Home'
import Articles from './components/Articles';
import Topics from './components/Topics';
import OneArticle from './components/OneArticle'
import Comments from './components/Comments'
import Errors from './utils/errors'
import LoginBar from './components/LoginBar';
import User from './components/User'

class App extends React.Component {
  state = {
    username: "jessjelly"
  }
  render() {
    const { username } = this.state
    return (
      <div className="App">
        <LoginBar handleChange={this.handleChange} username={username} />
        <Header />
        <Router className="router">
          <Home path='/' />
          <Articles path='/articles' />
          <Articles path='/topics/:topic' />
          <Topics path='/topics' />
          <OneArticle path='/articles/:article_id' />
          <Comments path='/comments/:article_id' username={username} />
          <User path='/user/:user_name' username={username} />
          <Errors default />
        </Router>
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }
}

export default App;
