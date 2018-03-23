import React, { Component } from 'react';
import StationDetails from './stationDetails'
import './puntobike.css'

class BodyPuntoBike extends Component{
	render(){
		return (
					<div>
						<StationDetails /> 
						<StationDetails /> 
						<StationDetails /> 
						<StationDetails /> 
						<StationDetails /> 
					</div>
		)
	}
}

export default BodyPuntoBike