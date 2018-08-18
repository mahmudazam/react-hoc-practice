
import React, { Component } from 'react';

const animateLoad = (Child, before, after) => {
  let result = class extends Component {
    state = { show: false };

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          ...this.state,
          show: true
        });
      }, 0);
    }

    render() {
      let props = this.props;
      return (
        <div style={this.state.show ? after : before}>
          <Child {...props}/>
        </div>
      );
    }
  };

  return result;
}

export { animateLoad };
