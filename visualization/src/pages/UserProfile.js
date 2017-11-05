import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import logoImg from '../images/logo.png';
import { VDSideNav }  from '../components/VDSideNav';
import VDButton from '../components/VDButton';
import BrushBarChart from '../components/BrushBarChart';
import TwoLevelPieChart from '../components/SimpleRadarChart'

class UserProfile extends Component {

  componentDidUpdate(prevProps) {
    const { redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;
    if (isLoggingIn) {
      const currentLocation = browserHistory.getCurrentLocation().pathname;
      //only move from the current page if its a login page
      browserHistory.replace(redirectUrl || '/');

    } else if (isLoggingOut) {
      browserHistory.replace("/");
    }
  }

  render() {
    return (
          <div style={{alignItems:'center'}}>
            <p style={{fontSize:'16px'}}> Strength of various groups</p>
            <BrushBarChart/>
            <p style={{fontSize:'16px'}}> Density of various groups </p>
            <TwoLevelPieChart/>
          </div>
    );
  }
}

function mapStateToProps({user}, ownProps) {
  let {isLoggedIn, redirectUrl} = user;
  return {
    isLoggedIn,
    redirectUrl
  }
}

export default connect(mapStateToProps)(UserProfile);
