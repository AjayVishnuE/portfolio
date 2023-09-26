import React, { Component } from 'react'
import "./spotlight.css"
import Name from '../name/Name'


export default class Spotlight extends Component {
  render() {
    return (
      <div className='spotlight'>
        <div className='namesection'>
          <h1 classNmae="line1">
            Hello, I Am Ajay Vishnu E 
          </h1>
          <h1 className='line2'>
            I Am A {'{'} Developer {'}'}
          </h1>
        </div>
        <div className='resumesection'>
          <div className='resumebtn'>
            <a className="" href="">
                <h2>My Resume</h2>
            </a>
          </div>
          <h2>Click here to view my resume.</h2>
        </div>
      </div>
    )
  }
}
