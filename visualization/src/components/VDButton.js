import React from 'react';
import { Link } from 'react-router';

class VDButton extends React.Component {
  static defaultProps = {
    onClick: () => ""
  };

  render() {

    const {to,onClick,className,children,buttonStyle} = this.props;

    return (
      <Link to={to} onClick={onClick}>
        <button className={"btn"+ (className ? " " + className : "")} style={buttonStyle}>
            {children}
        </button>
      </Link>
    );
  }
}

export default VDButton;
