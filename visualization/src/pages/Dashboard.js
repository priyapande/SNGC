import React from 'react';
import SimpleBarChart from '../components/SimpleBarChart';
import StraightAnglePieChart from '../components/StraightAnglePieChart';
import { Flex, Item } from 'react-flex';

class Dashboard extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <Flex column alignItems='center' justifyContent='flex-start'>
          <Item style={{fontSize:'20px'}}> Areawise Density of Groups </Item>
          <SimpleBarChart/>
          <Item style={{width:'40%',margin:0}} alignSelf='center'>The bar graph describes the density of groups in various locations in Pec campus like Pec Market, library etc
            It shows the strength recorded at that location
            Unknown location means that the area is out of campus</Item>
          <Item style={{fontSize:'20px',paddingTop:60}}> Gender Data of various groups </Item>
            <StraightAnglePieChart/>
            <Item style={{width:'40%',margin:0}} alignSelf='center'>The pie chart describes the gender ratio in the groups whether it is an all girls group or an all boys or a mixed group with both boys and girls included in form of percentage for each section
            </Item>
      </Flex>
    );
  }
}

export default Dashboard;
