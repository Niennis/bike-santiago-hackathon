const WithMarkers = React.createClass({
  onMarkerClick: function(props, marker, e) {
  },

render: function() {
  return (
    <Map google={this.props.google} zoom={14}>

      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

      {/* <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
      </InfoWindow> */}
    </Map>
  );
}
})
