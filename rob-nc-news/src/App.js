import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import Header from './components/Header';
import Home from './components/Home'
import Articles from './components/Articles';
import Topics from './components/Topics';
import OneArticle from './components/OneArticle'
import Comments from './components/Comments'
import Errors from './utils/errors'

class App extends React.Component {
  state={
    username:"jessjelly"
  }
  render(){
    return (
      <div className="App">
      <p className= "username"> Logged in as '{this.state.username}'. 
      <form onSubmit={this.handleSubmit}>
      Choose new user from dropdown list: 
      <select value={this.state.username} onChange={this.handleChange}>
        <option value="jessjelly">jessjelly</option>
        <option value="happyamy2016">happyamy2016</option>
        <option value="cooljmessy">cooljmessy</option>
      </select>
      </form>
      </p>
        <Header/>
        <Router>
          <Home path='/' />
          <Articles path='/articles' />
          <Articles path='/topics/:topic' />
          <Topics path='/topics' />
          <OneArticle path='/articles/:article_id' />
          <Comments path='/comments/:article_id' username={this.state.username}/>
          <Errors default />
        </Router>
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({username:event.target.value})
  }
}

export default App;
