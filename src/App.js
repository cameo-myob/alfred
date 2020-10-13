import React from 'react';
import '@myob/myob-styles/dist/styles/myob-clean.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  Navigation, MYOBLogo, StandardTemplate,
} from '@myob/myob-widgets';

import Home from './components/Home';
import StartHere from './components/StartHere';

const brand = (
  <Navigation.Brand url="/" width="73px">
    <MYOBLogo />
  </Navigation.Brand>
);

const primary = [
  <Link to="/">
    <Navigation.Link
      key="home"
      onSelect={() => ('selected')}
      label="Home"
    />

  </Link>,
  <Link to="/start-here">
    <Navigation.Link
      key="startHere"
      onSelect={() => ('selected')}
      label="Start Here"
    />

  </Link>,
  <Link to="/about">
    <Navigation.Link
      key="about"
      onSelect={() => ('selected')}
      label="About"
    />

  </Link>,
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation fluid brand={brand} primary={primary} />
        <StandardTemplate>
          <Switch>
            <Route path="/start-here">
              <StartHere />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </StandardTemplate>
      </div>
    </Router>
  );
}

export default App;
