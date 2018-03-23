import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import { Navbar, Header, Nav, Brand, NavItem, NavDrop} from 'react-bootstrap';
import BikeIcon from './../img/logo_bike.png';
import GeoMap from './geolocation';
import { GoogleApiWrapper } from 'google-maps-react' 
import Example from './resumenStation';
import PuntoBike from './puntoBike';
import VistaUno from './vista 1/VistaUno'
import './navigationBar.css';

class NavigationBar extends Component {
  
  render() {
    return (
      <div>
      {/* <GeoMap google={this.props.google} /> */}
      
      <Router>
        <div>
                {/* <NavItem><Link to="/SearchImg" className="links">Images</Link></NavItem> */}
          <Navbar className="fixedBottom">
              {/* <Navbar.Brand>
                <img src={BikeIcon}/>
              </Navbar.Brand>             */}
            <Link to="/PuntoBike" className="links"><i className="fas fa-align-right fa-2x"></i></Link>
            <Link to="/VistaUno" className="links"><i className="fas fa-map-marker-alt fa-2x"></i></Link>
            <Link to="/Example" className="links"><i className="fas fa-user fa-2x"></i></Link>
            <Link to="/" className="links"><i className="fas fa-phone-volume fa-2x"></i></Link>
          </Navbar>

          <Route path="/PuntoBike" component={PuntoBike}></Route>
          <Route path="/Example" component={Example}></Route>
          <Route path="/VistaUno" component={VistaUno}></Route>
          <Route exact path="/" component={GeoMap}></Route>
          </div>
        </Router>
      </div>
        
    );
  }
}

export default NavigationBar;