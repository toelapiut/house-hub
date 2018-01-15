import React from 'react'
import Cart from './cart';
import BarChart from './BarChart'

export default () => {
    return (
        <div className="container">
        {/*  <div className="jumbotron">
            <h1>Jumbotron</h1>
          </div>*/}
        <Cart/>
          <BarChart/>
        </div>
    )
}
