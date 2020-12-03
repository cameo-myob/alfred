import React from 'react';
import '@myob/myob-styles/dist/styles/myob-clean.css';

import {
  Navigation,
  MYOBLogo,
} from '@myob/myob-widgets';

export default function Navbar() {
  const brand = (
    <Navigation.Brand url="/" width="73px">
      <MYOBLogo />
    </Navigation.Brand>
  );

  const primary = [
    <Navigation.Link
      key="home"
      label="Home"
      url="#/home"
    />,
    <Navigation.Link
      key="startHere"
      label="Start Here"
      url="#/start-here"
    />,
    <Navigation.Link
      key="about"
      label="About"
      url="#/about"
    />,
  ];

  return (
    <Navigation fluid brand={brand} primary={primary} />

  );
}
