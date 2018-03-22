import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Component
import Demo from './components/geolocation';
import ModalStation from './components/resumenStation'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Demo/>
        <ModalStation />
      </div>
    );
  }
}

export default App;
