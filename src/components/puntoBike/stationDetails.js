import React, { Component } from 'react';
import station from './../../img/other_station.jpg'; 
import { Grid, Col, Row } from 'react-bootstrap'; 
import { Label } from 'react-bootstrap'; 
import './puntobike.css'; 

class StationDetails extends Component{
	render(){
		return (
			<Grid>
				<Row className="cont-info-station">
					<Col xs={3} className="col-img">
						<img className="img-station" src={station} alt="estacionamiento_bike"></img>
					</Col>
					<Col xs={9} className="col-info">
						<h5>Nombre Estacion</h5>
						<h6>Direccion Estacion</h6>
						<Label className="label-info">Parking<span>5</span></Label>
          	<Label className="label-info">Biclycle<span>5</span></Label>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default StationDetails