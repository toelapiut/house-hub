import React from 'react'
import { PieChart,Pie,Tooltip } from 'recharts';

const data01 = [{name: 'Garbage', value: 400}, {name: 'Group B', value: 300},
                {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

export default class Expenses extends React.Component {

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
        const homeData = this.props.incomeData
        // console.log(homeData)
        return(
            <PieChart width={800} height={400}>
                <Pie isAnimationActive={false} data={homeData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                <Tooltip/>
            </PieChart>
        )
    }
}