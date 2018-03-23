import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GeoMap from './geolocation';



class Barra extends Component {
  
  render() {
    
    return(
      <div>
        <Router>
          <div>
            <div className="BarraSuperior">       
              <h1 className="viajes"><Link to="/" className="links"><i className="fas fa-chevron-left fa-1x"></i></Link>BikeSantiago</h1>
            </div>
            <Route exact path="/" component={GeoMap}></Route>
          </div>
        </Router>
      </div>
    )
  }
}



export default Barra;