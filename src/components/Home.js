import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@myob/myob-widgets';
import Alfred from '../img/alfred.png';

const Home = () => (
  <div className="home">
    <img src={Alfred} alt="Alfred logo" className="logo" />
    <Link to="/start-here"><Button type="primary">Let's get started!</Button></Link>
  </div>
);

export default Home;
