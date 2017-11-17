import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import BrushBarChart from '../components/BrushBarChart';
import TwoLevelPieChart from '../components/SimpleRadarChart'
import { Flex, Item } from 'react-flex';


class UserProfile extends Component {

  componentDidMount() {
    if(!this.props.isLoggedIn) {
      browserHistory.replace('/');
      window.alert('Please Login first');
    }
  }

  render() {
    return (
      <Flex column alignItems='center' justifyContent='flex-start'>
            <Item style={{fontSize:'20px'}}> Strength of various groups and members</Item>
            <BrushBarChart/>
            <Item style={{width:'40%',margin:20}} alignSelf='center'>The chart describes the strength of the user with its different groups
The filter can be used to see different ranges of strength</Item>
            <Item style={{fontSize:'20px',paddingTop:60}}> Strength with strong group members </Item>
            <TwoLevelPieChart/>
            <Item style={{width:'40%',margin:20}} alignSelf='center'>The chart describes the strength of the user with other group members in form of a Radial Bar Chart , from which we can know the strongest group member for that particular user
            </Item>
      </Flex>
    );
  }
}

function mapStateToProps({user}, ownProps) {

  return {
    isLoggedIn:user.isLoggedIn
  }
}

export default connect(mapStateToProps)(UserProfile);
