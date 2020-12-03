import React from 'react';
import '@myob/myob-styles/dist/styles/myob-clean.css';

import Switch from './Switch';
import Navbar from './components/Navbar';

const App = ({ modules, router }) => (
  <div className="App">
    <Navbar />
    <Switch modules={modules} router={router} />
  </div>
);
export default App;
