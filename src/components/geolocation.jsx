import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'; // InfoWindow, GoogleApiWrapper, google
import Example from './resumenStation';
 
class GeoMap extends Component {
  constructor() {
    super();
    this.state = {
      apiKey:('AIzaSyDXFZ4Jie51LPLjQoXHhNq_icL34alYz0E'),
      show: false,
      locations: [
        // { name: "Cerro Blanco", location: {lat: -33.42251, lng: -70.64478} },
        // { name: "Av. Peru / Maestra Lidia Torres", location: {lat: -33.42382, lng: -70.63992} },
        // { name: "Clinica Dávila", location: {lat: -33.42751, lng: -70.64655} },
        // { name: "Bellavista /Recoleta", location: {lat: -33.43214, lng: -70.64846} },
        // { name: "Loreto / Bella vista", location: {lat: -33.43342, lng: -70.64226} }
      ],
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
  
  // componentDidMount() {
  //   this.setState({ show: true })
  // }

  onMarkerClick (props) {
    console.log(props);
    return (this.setState({ show: true }))
  }

render() {
  const markers = this.state.locations;
  const {show} = this.state.show;
  // const center = {lat: this.props.}
  return (
    <div>
      {/* <Example station={markers.name}/> */}
      <Map google={this.props.google} zoom={15} initialCenter={{lat: -33.42251, lng: -70.64478}} >

        {(markers.map((eachMarker, index) => (
          <Marker key={index} onClick={this.onMarkerClick} name={eachMarker.name} address={eachMarker.extra.address} position={{lat: eachMarker.latitude, lng: eachMarker.longitude}} freeBikes={eachMarker.free_bikes} emptySlots={eachMarker.empty_slots}/>)))}

      </Map>
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXFZ4Jie51LPLjQoXHhNq_icL34alYz0E',
 })(GeoMap)