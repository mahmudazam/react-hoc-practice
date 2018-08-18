
import React, { Component } from 'react';
import { chainTransform } from './ChainTransform';

const animateOnClick = (Child, before, after) =>  {
  let result = class extends Component {
    state = { show: false };

    onClick() {
      setTimeout(() => {
        this.setState({
          ...this.state,
          show: !this.state.show
        });
      }, 0);
    }

    render() {
      let props = this.props;
      return (
        <div onClick={this.onClick.bind(this)}
             style={this.state.show ? after : before}>
          <Child {...props}/>
        </div>
      );
    }
  };

  return chainTransform(result);
}

export { animateOnClick };
