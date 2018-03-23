import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GeoMap from './../geolocation';
import './puntobike.css'; 

class BarraBike extends Component{
	render(){
		return (
			<div>
        <Router>
          <div>
            <div className="barraSuperior">       
              <h3 className="viajes"><Link to="/" className="links backLink"><i className="fas fa-chevron-left fa-1x"></i></Link>Punto Bike</h3>
            </div>
            <Route exact path="/" component={GeoMap}></Route>
          </div>
        </Router>
      </div>
		)
	}
}

export default BarraBike;