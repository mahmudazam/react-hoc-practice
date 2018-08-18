import React, { Component } from 'react';
import Panel from './Panel';
import { animateLoad } from './AnimateLoad.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let FadeInPanel = animateLoad(Panel,
        { opacity: '0' },
        { opacity: '1', transition: '0.5s' });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FadeInPanel style={{ border: 'black 5px' }}>
          This fades in on page load. Refresh to try...
        </FadeInPanel>
      </div>
    );
  }
}

export default App;
