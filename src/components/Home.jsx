import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';



export default() => {
  return (
    <div>
      <Header/>
      <SideBar/>
      <Content/>
    </div>
  )
}
