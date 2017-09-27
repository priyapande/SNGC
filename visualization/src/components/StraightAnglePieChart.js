import {PieChart, Pie, Legend} from 'recharts';
import React from 'react';

const data = [{name: 'girls', value: 30}, {name: 'boys', value: 50},
                  {name: 'mixed', value: 20}]

class StraightAnglePieChart extends React.Component {
	render () {
  	return (
    	<PieChart width={800} height={500}>
        <Pie startAngle={360} endAngle={0} data={data} cx={200} cy={200} outerRadius={90} fill="#8884d8" label/>
       </PieChart>
    );
  }
}

export default StraightAnglePieChart;
