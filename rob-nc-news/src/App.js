import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import Header from './components/Header';
import Home from './components/Home'
import Articles from './components/Articles';
import Topics from './components/Topics';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Home path='/' />
        <Articles path='/articles' />
        <Topics path='/topics' />
      </Router>
    </div>
  );
}

export default App;
