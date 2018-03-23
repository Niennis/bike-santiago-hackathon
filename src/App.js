import React, { Component } from 'react';
import './App.css';

//Component
import Demo from './components/geolocation';
import ModalStation from './components/resumenStation'; 
import PuntoBike from './components/puntoBike/'; 

class App extends Component {
  render() {
    return (
      <div className="app">
        <PuntoBike /> 
      </div>
    );
  }
}

export default App;


/*
      	<Demo />
        <ModalStation />
*/