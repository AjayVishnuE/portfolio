import React, { Component } from 'react'
import { Footer, Navbar, Spotlight } from '../../components'
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar/>
        <Spotlight/>
        <Footer/>
      </div>
    )
  }
}
