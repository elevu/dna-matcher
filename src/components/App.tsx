import * as React from 'react';
import './App.style.css'
import dna from '../assets/dna.gif'

class App extends React.Component {
    render()
    {
        return (
            <div className='title'>
                <img alt='helix' src={dna}></img>
            </div>
    );
    }
}

export default App;