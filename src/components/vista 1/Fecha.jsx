import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class Fecha extends Component {
  render(){
    return(
      <div className="Fecha">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <p>23-05-2017 09:13:47</p>
            </Col>    
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Fecha;