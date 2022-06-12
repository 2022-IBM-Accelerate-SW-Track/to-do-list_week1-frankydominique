import React, { Component } from 'react';
import pic from '../assets/IMG_8188.jpg';
import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div class='centered' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <div>
          <img src={pic} style={{width: '20%', height: '20%', borderRadius: '75%'}} alt="Photo of Franky"/>
          <h1>Franceska Padilla Coo</h1>

          <div >
            <h3> (she/her) 2024 Computer Science (B.S.), Data Science Minor at the University of Virginia </h3>
            <hr />

            <p> Hello! My name is Franceska, but you can also call me Franky! I'm currently interning as a data scientist 
              at IT Concepts. I love listening to music, playing flag football, and dancing with my university's Filipino
              organization!
            </p>
          </div>

          <a href="https://www.linkedin.com/in/franceska-padilla-coo" target="_blank">
            <img src={'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'} style={{width:'10%'}}/>
          </a>
          <a class="m-3" href="https://open.spotify.com/user/frankydominique" target="_blank">
            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'} style={{width:'10%'}}/>
          </a>
        </div>
      </div>
    )
  }
}