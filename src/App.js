import React, { Component } from 'react';
import './App.css';

//Component
import Demo from './components/geolocation';
import ModalStation from './components/resumenStation'; 

class App extends Component {
  render() {
    return (
      <div className="app">
        <ModalStation />
      </div>
    );
  }
}

export default App;
