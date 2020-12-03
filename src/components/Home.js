import React from 'react';
import {
  Button, BaseTemplate, Card,
} from '@myob/myob-widgets';
import Alfred from '../img/alfred.png';

const Home = ({ router }) => (
  <div className="home">
    <BaseTemplate>
      <Card>
        <div className="center-button">
          <img src={Alfred} alt="Alfred logo" className="logo" />
          <br />
          <br />
          <Button className="center-button" type="primary" onClick={() => router.navigate('start-here')}>Let's get started!</Button>
        </div>
      </Card>
    </BaseTemplate>
  </div>
);

export default Home;
