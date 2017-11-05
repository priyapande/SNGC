import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LoginModel from './LoginModel'
import logoImg from './images/logo.png';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import {VDSideNav} from './components/VDSideNav';
import './App.css';
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';

class App extends Component {

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

    const headStyle = {
      color:'#FFF',
      margin:0,
      fontFamily:'Poppins',
      fontSize:'18px'
    }
    return (
      <StickyContainer>
        <Sticky>
          <header id="header" style={{zIndex:100}}>
            <nav style={{backgroundColor:'#18149A'}}>
            <Flex row justifyContent='space-around' alignItems='center' className="nav-wrapper container">
                  <Item className="logo">
                    <img alt="Peanuts logo" src={logoImg} style={{marginTop:20}}/>
                  </Item>
                  <Item style={headStyle}>
                    Group Dynamics
                  </Item>
                  <LoginModel/>
            </Flex>
          </nav>
          </header>
          <VDSideNav/>
        </Sticky>
        <Flex column justifyContent='flex-start' alignItems='center'>
        <Item className="hide-on-small-only">
          {<Dashboard/> || this.props.children}
        </Item>
        </Flex>
    </StickyContainer>
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

export default connect(mapStateToProps)(App);
