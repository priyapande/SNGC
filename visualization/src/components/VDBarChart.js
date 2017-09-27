import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell} from 'recharts';
import {area} from '../data/locationData.js';

class VDBarChart extends React.Component {
  render() {
    return (
    <BarChart width={600} height={300} data={area} margin={{top: 5, right: 30, left: 20, bottom: 5}} barGap={3}>
     <XAxis dataKey="name"/>
     <YAxis/>
     <CartesianGrid/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="perc" fill="red" >
     <Cell fill='red'/>
     </Bar>
    </BarChart>
    );
  }
}

export default VDBarChart;
