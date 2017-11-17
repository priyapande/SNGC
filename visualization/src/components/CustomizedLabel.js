import React from 'react';

class CustomizedLabel extends React.Component {

  render() {
    return (
      <p style={{marginTop:1000,marginRight:500}}>{this.props.children}</p>
    );
  }
}

export default CustomizedLabel;
