import React from 'react';
import SimpleBarChart from '../components/SimpleBarChart';
import StraightAnglePieChart from '../components/StraightAnglePieChart';
class Dashboard extends React.Component {
  render() {
    return (
        <div style={{alignItems:'center'}}>
          <p style={{fontSize:'16px'}}> Areawise Density of Groups </p>
          <SimpleBarChart/>
          <p style={{fontSize:'16px'}}> Gender Data of various groups </p>
          <StraightAnglePieChart/>
        </div>
    );
  }
}

export default Dashboard;
