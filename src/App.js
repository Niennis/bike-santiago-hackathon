// import React, { Component } from 'react';
// import Geolocation from './components/geolocation';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Geolocation/>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer';
import GeoMap from './components/geolocation';

//Component
import Demo from './components/geolocation';
import ModalStation from './components/resumenStation'; 

class App extends Component {
  render() {
    return (

      <div className="App">
      
        <h1> Maps API + React </h1> 
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