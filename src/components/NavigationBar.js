import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import { Navbar, Header, Nav, Brand, NavItem, NavDrop} from 'react-bootstrap';
import BikeIcon from './../img/logo_bike.png';
import Example from './resumenStation';

class NavigationBar extends Component {
  render() {
    return (
      <Router>
        <div>
                {/* <NavItem><Link to="/SearchImg" className="links">Images</Link></NavItem> */}
          <Navbar className="fixedBottom">
            <Navbar.Header>
              <Navbar.Brand>
                <img src={BikeIcon}/>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/Example" className="links">Example</Link>
              </NavItem>
              <NavItem>
                Link
              </NavItem>
            </Nav>
          </Navbar>

          <Route path="/Example" component={Example}></Route>
          {/* <Route path="/ShowNews" component={}></Route> */}
          </div>
        </Router>
    );
  }
}

export default NavigationBar;