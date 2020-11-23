import React from 'react';
import { Button } from '@myob/myob-widgets';
import Alfred from '../img/alfred.png';

const Home = () => (
  <div className="home">
    <img src={Alfred} alt="Alfred logo" className="logo" />
    <Button type="primary">Let's get started!</Button>
  </div>
);

export default Home;
