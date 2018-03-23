import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'; // InfoWindow, GoogleApiWrapper, google
import Example from './resumenStation';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Label } from 'react-bootstrap'; 
import Estacionamiento from './../img/estacion-salvador-bikesantiago.jpg';
import './resumenStation.css';


 
class GeoMap extends Component {
  constructor(show) {
    super(show);
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
      name: null,
      address: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
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

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      name: props.name,
      address: props.address
    });
    console.log(props)
  }
  
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  componentDidMount() {
    this.setState({ show: true })
    console.log(this.state.show)
  }

render() {
  const markers = this.state.locations;
  const {show} = this.state.show;
  const {name} = this.state;
  const {address} = this.state;
  // const center = {lat: this.props.}
  return (
    <div>

      <Map google={this.props.google} zoom={15} initialCenter={{lat: -33.42251, lng: -70.64478}} >

        {(markers.map((eachMarker, index) => (
          <Marker key={index} onClick={this.onMarkerClick.bind(this)} name={eachMarker.name} address={eachMarker.extra.address} position={{lat: eachMarker.latitude, lng: eachMarker.longitude}} freeBikes={eachMarker.free_bikes} emptySlots={eachMarker.empty_slots}/>)))}
          
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              {this.state.name}{this.state.address}
            </div>
        </InfoWindow>
      </Map>
      
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXFZ4Jie51LPLjQoXHhNq_icL34alYz0E',
 })(GeoMap)