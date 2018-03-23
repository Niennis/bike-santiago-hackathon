import React, { Component } from 'react';

import ResumenViaje from './ResumenViaje';
import TiempoViaje from './TiempoViaje';
import CobrosAdicionales from './CobrosAdicionales';

// <i class="fas fa-arrows-alt-v"></i>
class ResumenMes extends Component {
  render() {
    return(
      <div>
        <ResumenViaje/>
        <TiempoViaje/>
        <CobrosAdicionales/>
      </div>
    )
  }
}

export default ResumenMes;