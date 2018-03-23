import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

class BarraFavoritos extends Component{
	render(){
		return (
			<Grid>
				<Row className="barraFavoritos">
					<Col xs={6} className="borderRightVisible">
						<div><h4>Favoritos</h4></div>
					</Col>
					<Col xs={6}>
						<div><h4>Todos</h4></div>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default BarraFavoritos