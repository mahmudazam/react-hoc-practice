
import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '10vh' }}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
