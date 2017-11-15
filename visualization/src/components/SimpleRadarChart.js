import  {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import React from 'react';
import { connect } from 'react-redux';
import * as actioncreators from '../actioncreator';


class TwoLevelPieChart extends React.Component{
  componentDidMount() {
    this.props.userStrength(this.props.userId);
  }

  render () {
  	return (
    	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="username" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="strength" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
      </RadarChart>
    );
  }
}

const mapStateToProps = ({graph,user}) => {
  return {
    data:graph.userStrength,
    userId:user.userId
  }
}

export default connect(mapStateToProps,actioncreators)(TwoLevelPieChart);
