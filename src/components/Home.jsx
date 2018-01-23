import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import { Route,Switch } from 'react-router-dom';
import Charts from './Charts'


export default ({history}) => {
  // const {match} = this.props
  console.log(history)
  return (
    <div>
      <Header/>
      <SideBar/>
      <Content/>
    </div>
  )
}
