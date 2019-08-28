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

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Home path='/' />
        <Articles path='/articles' />
        <Articles path='/topics/:topic' />
        <Topics path='/topics' />
        <OneArticle path='/articles/:article_id' />
        <Comments path='/comments/:article_id' />
        <Errors default />
      </Router>
    </div>
  );
}

export default App;
