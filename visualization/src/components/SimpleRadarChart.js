import {RadialBarChart, RadialBar, Legend,Cell,Tooltip} from 'recharts';
import React from 'react';
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

class TwoLevelPieChart extends React.Component{
  componentDidMount() {
    this.props.userStrength(this.props.userId);
  }



  render () {
    const style = {
  	top: 80,
  	left: 300,
  	lineHeight: '24px'
  };
  const data = (this.props.data);
  const result = [];
  for(let i in data)
    result.push([i,data[i]]);

    const renderLegend = (props) => {
      const { payload } = props;
      //console.log(payload)
    return (
      <ul>
        {
          payload.map((entry, index) => (
            <div>
            <span style={{width:'10px',height:'10px',backgroundColor:entry.color,display:'block'}}/>
            <li key={`item-${index}`}>{entry.payload.username}</li>
            </div>
          ))
        }
      </ul>
    );
  }


  	return (
    	<RadialBarChart width={500} height={400} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={15} data={this.props.data}>
        <RadialBar minAngle={15} label={{position:'outside'}} background clockWise={true} dataKey='strength'>
        {
          result.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
        </RadialBar>
        <Tooltip/>
        <Legend iconSize={10}
        width={120} height={140}
        layout='vertical' verticalAlign='middle'
        wrapperStyle={style}
        content={renderLegend}
        />
      </RadialBarChart>
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
