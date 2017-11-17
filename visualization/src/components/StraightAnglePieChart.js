import {PieChart, Pie, Legend,Cell} from 'recharts';
import React from 'react';
import { connect } from 'react-redux';
import * as actioncreators from '../actioncreator';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class StraightAnglePieChart extends React.Component {
  componentDidMount() {
    this.props.genderRatio()
  }
	render () {
    const data = (this.props.data);
    const result = [];
    for(let i in data)
      result.push([i,data[i]]);
    //console.log(data);
  	return (
    	<PieChart width={600} height={350} >
        <Pie startAngle={360}
        endAngle={0}
        data={this.props.data}
        cx={200} cy={200}
        outerRadius={90}
        fill="#8884d8"
        label>
        {
          result.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
        </Pie>
        <Legend width={100} wrapperStyle={{ top: 80, right: 100, borderRadius: 3, lineHeight: '40px' }} layout='vertical' />
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
