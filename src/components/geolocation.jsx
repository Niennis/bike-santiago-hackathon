import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class GeoMap extends Component {
  constructor() {
    super();
    this.state = {
      apiKey:('AIzaSyDXFZ4Jie51LPLjQoXHhNq_icL34alYz0E'),
      locations: []
    }
  }

  componentWillMount() {
    fetch('http://api.citybik.es/v2/networks/santiago').then(data => data.json())
    .then(response => {
      console.log(response.network.stations);
      const locations = response.network.stations;
      this.setState({locations});
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
  const {locations} = this.state;
  
  return (
    
    <Map google={this.props.google} zoom={15} onClick={this.onMapClicked}>

      {(markers.map((eachMarker, index) => (
        <Marker key={index} onClick={this.onMarkerClick} name={locations.name} 
                />)))}

    </Map>
    );
  }
}
 
export default GeoMap;