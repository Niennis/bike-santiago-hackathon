import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
import NavigationBar from './components/NavigationBar';
import GeoMap from './components/geolocation';
import Barra from './components/BarraSuperior';
// import ModalStation from './components/resumenStation'; 
import './App.css';
// import logo from './logo.svg';
// import the Google Maps API Wrapper from google-maps-react
// import child component
// import MapContainer from './MapContainer';
//Component

class App extends Component {
  render() {
    return (
      <div className="App">      
        {/* <MapContainer/> */}
        {/* <Barra/> */}
        <NavigationBar/>
        {/* <GeoMap google={this.props.google} /> */}
        {/* <ModalStation /> */}
      </div>
    );
  }
}

export default App;