import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
// import MapContainer from './MapContainer';
import GeoMap from './components/geolocation';
//Component
import ModalStation from './components/resumenStation'; 

class App extends Component {
  render() {
    return (
      <div className="app">      
        {/* <MapContainer/> */}
        {/* <GeoMap/> */}
        <GeoMap google={this.props.google} />
        <ModalStation />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXFZ4Jie51LPLjQoXHhNq_icL34alYz0E',
})(App)