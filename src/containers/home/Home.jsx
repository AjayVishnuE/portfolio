import React, { Component } from 'react'
import { Footer, Navbar, Spotlight } from '../../components'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Spotlight/>
        <Footer/>
      </div>
    )
  }
}
