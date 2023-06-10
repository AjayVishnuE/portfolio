import React, { Component } from 'react'
import "./flipcard.css"

export default class Flipcard extends Component {
  render() {
    return (        
      <div class="cards-overall">
            <div class="flip-card-container" >
                <div class="flip-card">
                    <div className="card-front">

                    </div>
                    <div className="card-back">

                    </div>
                </div>
            </div>
      </div>
    )
  }
}
