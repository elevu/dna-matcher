import React, { Component } from 'react';
import './App.style.css'
import dna from '../assets/dna.gif'

class App extends Component {
    render()
    {
        return (
            <div className='title'>Your DNA match here ;D
                <img src={dna}></img>
            </div>
    );
    }
}

export default App;