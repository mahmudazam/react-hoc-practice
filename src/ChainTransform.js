
import React, { Component } from 'react';

const chainTransform = (Child) => {
  let result = class extends Component {
    render() {
      let props = {...this.props};
      let grandChildren = this.props.children;
      props.children = undefined; 
      return ( 
        <Child {...props}>
          {grandChildren}
        </Child>
      );
    }
  };

  result.then = (next, ...args) => next(result, ...args);

  return result;
}

export { chainTransform };
