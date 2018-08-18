import React, { Component } from 'react';
import Panel from './Panel';
import { animateLoad } from './AnimateLoad.js';
import { animateOnClick } from './AnimateOnClick.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let FadeInPanel = animateLoad(Panel,
        { opacity: '0' },
        { background: 'green', opacity: '1', transition: '0.5s' });

    let ChainedAnimationPanel = animateOnClick(Panel,
        { opacity: '0', background: 'yellow' },
        { opacity: '1', background: 'green', transition: '1s' })
      .then(animateLoad,
        { transition: '0.5s' },
        { background: 'yellow', transition: '0.5s' });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FadeInPanel className="first-panel">
          This fades in on page load. Refresh to try...
        </FadeInPanel>
        <ChainedAnimationPanel>
          Click to change background...
        </ChainedAnimationPanel>
      </div>
    );
  }
}

export default App;
