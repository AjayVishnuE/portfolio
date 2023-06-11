import React, { Component } from 'react'
import "./sectioncontainer.css"
import "./imports"

export default class Sectioncontainer extends Component {
  render() {
    return (
      <div className='sectioncontainer'>
            <ul className="weeks">
                <li>
                    <label for="one" id="weekbutton1" className="weekbutton">Week 1</label>
                    <input className="radiobutton" id="one" type="radio" name="weekno" value="One"/>
                </li>
                <li>
                    <label for="two" className="weekbutton">Week 2</label>
                    <input className="radiobutton" id="two" type="radio" name="weekno" value="Two"/>
                </li>
                <li>
                    <label for="three" className="weekbutton">Week 3</label>
                    <input className="radiobutton" id="three" type="radio" name="weekno" value="Three"/>
                </li>
                <li>
                    <label for="four" className="weekbutton">Week 4</label>
                    <input className="radiobutton" id="four" type="radio" name="weekno" value="Four"/>
                </li>
                <li>
                    <label for="five" className="weekbutton">Week 5</label>
                    <input className="radiobutton" id="five" type="radio" name="weekno" value="Five"/>
                </li>
                <li>
                    <label for="six" className="weekbutton">Week 6</label>
                    <input className="radiobutton" id="six" type="radio" name="weekno" value="Six"/>
                </li>
            </ul>
            <div id="showOne" className="myDiv">1

            </div>
            <div id="showTwo" className="myDiv">2
            
            </div>
            <div id="showThree" className="myDiv">3
            
            </div>
            <div id="showFour" className="myDiv">4

            </div>
            <div id="showFive" className="myDiv">5

            </div>
            <div id="showSix" className="myDiv">6

            </div>
      </div>
    )
  }
}
