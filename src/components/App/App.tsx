import * as React from 'react';
import './App.style.css'
import dna from '../../assets/dna.gif'
import Upload from "../Upload/Upload";


class App extends React.Component {

    render()
    {
        return (
            <div className='title'>
                <Upload />
            </div>
    );
    }
}

export default App;
