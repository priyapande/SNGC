import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
import { connect } from 'react-redux';
import * as actioncreators from '../actioncreator';

class SimpleBarChart extends React.Component {

  componentDidMount() {
    //console.log("mount");
    this.props.barlocation();
  }

	render () {
  	return (
    	<BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
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
