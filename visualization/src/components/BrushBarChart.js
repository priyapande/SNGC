import {BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell} from 'recharts';
import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actioncreators from '../actioncreator';
const COLORS =[
  "#6666ff",
  "#82ca9d",
  "#8884d8",
  "#ffc658",
  "#8004d8",
  "#888400",
  "#0084d8",
  "#800098",
  "#8ffff8",
  "#f88fff"
];

class BrushBarChart extends React.Component {
  componentDidMount() {
    this.props.groupRatio(this.props.userId);
  }

	render () {
    const data = (this.props.data);
  //  console.log(data);
    const result = [];
    for(let i in data)
      result.push([i,data[i].members]);
      console.log(result);
  	return (
    	<BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="group_id" label={{ value: 'Group ID', offset:4, position: 'insideBottom' }} />
       <YAxis label={{ value: 'Strength', angle: -90, position: 'insideLeft' }}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
       <ReferenceLine y={0} stroke='#000'/>
       <Brush dataKey='group_strength' height={30} stroke="#8884d8"/>
       <Bar dataKey="group_strength" fill="#7119B2" />
      </BarChart>
    );
  }
}

const mapStateToProps = ({graph,user}) => {
  return {
    data:graph.groupRatio,
    userId:user.userId
  }
}

export default connect(mapStateToProps,actioncreators)(BrushBarChart);
