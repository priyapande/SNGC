import React from 'react';
import { browserHistory } from 'react-router';
import * as actioncreators from '../actioncreator';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    const {currentURL, isLoggedIn} = this.props;
    //const userId = cookie.load('userId');
    if (!isLoggedIn) {
      this.props.setRedirectUrl(currentURL);
      browserHistory.replace("/");
    }
    // On page reload our state doesn't know if a user is logged in or not
    // If userId cookie exists we assume that the user is logged in and when
    // any of the API request fail we will make the user go to login page
    // if(userId && !isLoggedIn) {
    //   this.props.loggedIn(userId);
    // }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

function mapStateToProps({user}, ownProps) {
  return {
    isLoggedIn: user.isLoggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps,actioncreators)(EnsureLoggedInContainer)
