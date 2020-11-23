import React from 'react';
import '@myob/myob-styles/dist/styles/myob-clean.css';

import Switch from './Switch';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch modules={this.props.modules} />
      </div>
    );
  }
}

export default App;
