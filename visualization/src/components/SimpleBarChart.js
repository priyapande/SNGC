import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Label,Text} from 'recharts';
import React from 'react';
import { connect } from 'react-redux';
import * as actioncreators from '../actioncreator';
import CustomizedLabel from './CustomizedLabel';

class SimpleBarChart extends React.Component {

  componentDidMount() {
    //console.log("mount");
    this.props.barlocation();
  }

	render () {
  	return (
    	<BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name" label={{ value: 'Location', top:0, position: 'insideBottom' }} interval='0' minTickGap='8' tick={false} />
       <YAxis label={{ value: 'Density', angle: -90, position: 'insideLeft' }} />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip />
       <Legend width={100} wrapperStyle={{ top: 60, right: -80, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
       <Bar dataKey="strength" fill="#52F0C5" />
      </BarChart>

    );
  }
}

const mapStateToProps = ({graph}) => {
  return {
    data:graph.location
  }
}

export default connect(mapStateToProps,actioncreators)(SimpleBarChart);
