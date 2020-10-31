import React from 'react'
import { connect } from 'react-redux'
import SideBar from './Sidebar'
import s from './Sidebar.module.css'


let mapStateToProps = (state) => {
  return {
    posts: state.sidebar.friends
  }
}

let SideBarContainer = connect(mapStateToProps)(SideBar)


export default SideBarContainer


