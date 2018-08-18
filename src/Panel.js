
import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return (
      <div style={{ background: 'green' , width: '100%', height: '40vh' }}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
