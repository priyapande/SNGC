import {PieChart, Pie, Legend} from 'recharts';
import React from 'react';
import { connect } from 'react-redux';
import * as actioncreators from '../actioncreator';


class StraightAnglePieChart extends React.Component {
  componentDidMount() {
    this.props.genderRatio()
  }
	render () {
  	return (
    	<PieChart width={800} height={500}>
        <Pie startAngle={360} endAngle={0} data={this.props.data} cx={200} cy={200} outerRadius={90} fill="#8884d8" label/>
       </PieChart>
    );
  }
}

const mapStateToProps = ({graph,user}) => {
  return {
    data:graph.genderRatio,
    userId:user.userId
  }
}

export default connect(mapStateToProps,actioncreators)(StraightAnglePieChart);
