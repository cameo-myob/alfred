import React from 'react';
import '@myob/myob-styles/dist/styles/myob-clean.css';
import { Link } from 'react-router-dom';

import {
  Navigation, MYOBLogo, StandardTemplate, Button,
} from '@myob/myob-widgets';

import Alfred from './img/alfred.png';

const brand = (
  <Navigation.Brand url="#Dashboard" width="73px">
    <MYOBLogo />
  </Navigation.Brand>
);

const primary = [
  <Navigation.Link
    key="home"
    onSelect={() => ('selected')}
    label="Home"
  />,
  <Navigation.Link
    key="startHere"
    onSelect={() => ('selected')}
    label="Start Here"
  />,
  <Navigation.Link
    key="about"
    onSelect={() => ('selected')}
    label="About"
  />,
];

function App() {
  return (
    <div className="App">
      <Navigation fluid brand={brand} primary={primary} />
      <StandardTemplate>
        <img src={Alfred} alt="Alfred logo" className="logo" />
        <Link to="/start-here"><Button type="primary">Let's get started!</Button></Link>
      </StandardTemplate>
    </div>
  );
}

export default App;
