import React from 'react'
import { PieChart,Pie,Tooltip } from 'recharts';

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

        // props from its parent component(content.jsx)
        const data = this.props.house_count
        // convert it to data which can be understood by the charts(piechart)
        const data01 = [
            {name: 'Occupied', value: data.occupied},
            {name: 'Available', value: data.available},
                ]
        console.log(data.available)
        return(
            <PieChart width={800} height={400}>
            <Pie data={data01} cx={200} cy={200} innerRadius={40} outerRadius={90} fill="#82ca9d" label/>
           </PieChart>
        )
    }
}