import  {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import React from 'react';

const data = [
    { subject: 'pecmarket', A: 120, B: 110, fullMark: 150 },
    { subject: 'Library', A: 98, B: 130, fullMark: 150 },
    { subject: 'Auditorium', A: 86, B: 130, fullMark: 150 },
    { subject: 'Department', A: 99, B: 100, fullMark: 150 },
    { subject: 'Gym', A: 85, B: 90, fullMark: 150 },
    { subject: 'CCD', A: 65, B: 85, fullMark: 150 },
];

class TwoLevelPieChart extends React.Component{
  render () {
  	return (
    	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
    );
  }
}

export default TwoLevelPieChart;
