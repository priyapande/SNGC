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
      paddingLeft:200,
      paddingTop:15,
      fontFamily:'Poppins'
    }
    return (
      <StickyContainer>
        <Sticky>
          <header id="header" style={{zIndex:100}}>
            <nav style={{backgroundColor:'#18149A'}}>
              <div className="nav-wrapper container" style={{margin:0}}>
                <a className="logo" style={{alignItems:'center'}}>
                  <img src={logoImg} alt="Peanuts logo" style={{height:50,paddingTop:15,paddingLeft:15,float:'left'}}/>
                  <LoginModel/>
                  <h4 style={headStyle}>
                    Group Dynamics
                  </h4>
                </a>
              </div>
            </nav>
          </header>
        </Sticky>
          <VDSideNav/>
        <div className="hide-on-small-only" style={{marginLeft:"200px",marginTop:0}}>
          {this.props.children || <Dashboard/> || <UserProfile/>}
        </div>
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
