import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import { Navbar, Header, Nav, Brand, NavItem, NavDrop} from 'react-bootstrap';
import BikeIcon from './../img/logo_bike.png';
import Example from './resumenStation';
import './navigationBar.css'

class NavigationBar extends Component {
  render() {
    return (
      <Router>
        <div>
                {/* <NavItem><Link to="/SearchImg" className="links">Images</Link></NavItem> */}
          <Navbar className="fixedBottom">
              {/* <Navbar.Brand>
                <img src={BikeIcon}/>
              </Navbar.Brand>             */}
            <Link to="/Example" className="links"><i className="fas fa-align-right fa-2x"></i></Link>
            <Link to="/Example" className="links"><i className="fas fa-map-marker-alt fa-2x"></i></Link>
            <Link to="/Example" className="links"><i className="fas fa-user fa-2x"></i></Link>
            <Link to="/Example" className="links"><i className="fas fa-phone-volume fa-2x"></i></Link>
          </Navbar>

          <Route path="/Example" component={Example}></Route>
          {/* <Route path="/ShowNews" component={}></Route> */}
          </div>
        </Router>
    );
  }
}

export default NavigationBar;