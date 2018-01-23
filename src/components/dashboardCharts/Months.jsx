import React from 'react'
import { BarChart,Bar,YAxis,XAxis,CartesianGrid,Tooltip,Legend } from 'recharts';

export default class Month extends React.Component {
    render(){

        const data = [
            {name: 'June', "Court Peaky": 400000, 'Court Blinders': 240000, amt: 2400},
            {name: 'July', "Court Peaky": 400000, 'Court Blinders': 139008, amt: 2210},
            {name: 'August', "Court Peaky": 400000, 'Court Blinders': 900800, amt: 2290},
            {name: 'September', "Court Peaky": 400000, 'Court Blinders': 390008, amt: 2000},
            {name: 'October', "Court Peaky": 400000, 'Court Blinders': 480000, amt: 2181},
            {name: 'November', "Court Peaky": 400000, 'Court Blinders': 380000, amt: 2500},
      ];

        return(
            <BarChart width={800} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="Court Peaky" fill="#8884d8" />
                <Bar dataKey='Court Blinders' fill="#82ca9d" />
            </BarChart>
        )
    }
}