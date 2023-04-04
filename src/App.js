
import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

export default class App extends Component {
  c="shubham"
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

