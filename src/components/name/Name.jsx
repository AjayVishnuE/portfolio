import React, { Component } from 'react'
import "./name.css"
import './imports'

// ❤
export default class Name extends Component {
  render() {
    return (
		<div class="animate four" id="">
      <span>H</span><span></span><span>,</span><span></span><span>I</span><span> </span><span>A</span><span>M</span><span> </span><span>A</span><span>J</span><span>A</span><span>Y</span><span> </span><span>V</span><span>I</span><span>S</span><span>H</span><span>N</span><span>U</span><span> </span><span>E</span>
      <div id="heart">
        <a class="repeat" href="javascript:void(0);">
            <input id="toggle-heart" type="checkbox"/>
            <label id="heart" for="toggle-heart">❤</label>
        </a>
      </div>
		</div>
    )
  }
}
