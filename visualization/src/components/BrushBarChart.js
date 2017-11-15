import {BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actioncreators from '../actioncreator';

class BrushBarChart extends React.Component {
  componentDidMount() {
    this.props.groupRatio(this.props.userId);
  }

  getMemberStrength() {
    this.props.data.members.map((strength) => <Bar dataKey={strength} fill="#D6EA26" />
    );
  }

	render () {
  	return (
    	<BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="group_id"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
       <ReferenceLine y={0} stroke='#000'/>
       <Brush dataKey='group_strength' height={30} stroke="#8884d8"/>
       <Bar dataKey="group_strength" fill="#7119B2" />
       <div>
        {this.getMemberStrength}
       </div>
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
