import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class GeoMap extends Component {
  constructor() {
    super();
    this.state = {
      apiKey:('AIzaSyDXFZ4Jie51LPLjQoXHhNq_icL34alYz0E'),
      locations: [
        { name: "Cerro Blanco", location: {lat: -33.42251, lng: -70.64478}, empty_slots: 9,  },
        { name: "Av. Peru / Maestra Lidia Torres", location: {lat: -33.42382, lng: -70.63992} },
        { name: "Clinica Dávila", location: {lat: -33.42751, lng: -70.64655} },
        { name: "Bellavista /Recoleta", location: {lat: -33.43214, lng: -70.64846} },
        { name: "Loreto / Bella vista", location: {lat: -33.43342, lng: -70.64226} }
      ]
    }
  }

  componentWillMount() {
    fetch('http://api.citybik.es/v2/networks/santiago').then(data => data.json())
    .then(response => {
      console.log(response.network.stations);
      const locations = response.network.stations;
      this.setState({locations})
    })
  }
  // onMapClicked(props) {
  //   console.log('holi', props)
  // }

  onMarkerClick (props, marker) {
    console.log(props, marker)
  }

render() {
  const markers = this.state.locations;
  // const style = {
  //   width: '90vw',
  //   height: '75vh'
  // }
  
  return (
    <Map google={this.props.google} zoom={15} initialCenter={ this.state.locations[0].location} onClick={this.onMapClicked}>

      {(markers.map((eachMarker, index) => (
        <Marker key={index} onClick={this.onMarkerClick} name={eachMarker.name} 
                position={eachMarker.location}/>)))}

    </Map>
    );
  }
}
 
export default GeoMap;