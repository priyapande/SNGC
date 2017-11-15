import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import BrushBarChart from '../components/BrushBarChart';
import TwoLevelPieChart from '../components/SimpleRadarChart'

class UserProfile extends Component {

  componentDidMount() {
    if(!this.props.isLoggedIn) {
      browserHistory.replace('/');
      window.alert('Please Login first');
    }
  }

  render() {
    return (
          <div style={{alignItems:'center'}}>
            <p style={{fontSize:'16px'}}> Strength of various groups and members</p>
            <BrushBarChart/>
            <p style={{fontSize:'16px'}}> Strength with strong group members </p>
            <TwoLevelPieChart/>
          </div>
    );
  }
}

function mapStateToProps({user}, ownProps) {

  return {
    isLoggedIn:user.isLoggedIn
  }
}

export default connect(mapStateToProps)(UserProfile);
