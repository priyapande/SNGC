import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
const data = [
      {name: 'pecmarket', percentage: 24},
      {name: 'gym', percentage: 30},
      {name: 'ccd', percentage: 20},
      {name: 'nescafe', percentage: 27},
      {name: 'audi', percentage: 18},
      {name: 'library', percentage: 23},
      {name: 'dept', percentage: 34},
];

class SimpleBarChart extends React.Component {
	render () {
  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="percentage" fill="#4C7B1D" />
      </BarChart>
    );
  }
}

export default SimpleBarChart;
