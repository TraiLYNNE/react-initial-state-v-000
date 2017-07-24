import React from 'react';
import ReactDOM from 'react-dom';

import ToggleButton from './components/ToggleButton';
import Address from './components/Address';

ReactDOM.render(
  <div>
    <Address 
      street="Compton Blvd."
      city="Compton"
    />
    <ToggleButton />
  </div>,
  document.getElementById('root')
)