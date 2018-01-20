import React from 'react'
import { PieChart,Pie,Tooltip } from 'recharts';

const data01 = [
    {name: 'Available', value: 6},
    {name: 'Occupied', value: 25},
        ]
export default class HouseCount extends React.Component {

    constructor(props){
        super(props);
        this.state={
            activeIndex: 0,
        }
    }

    onPieEnter(data, index) {
        this.setState({
            activeIndex: index,
        });
    }

    render(){
        return(
            <PieChart width={800} height={400}>
            <Pie data={data01} cx={200} cy={200} innerRadius={40} outerRadius={90} fill="#82ca9d" label/>
           </PieChart>
            // <PieChart width={800} height={400}>
            //     <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
            //     <Tooltip/>
            // </PieChart>
        )
    }
}