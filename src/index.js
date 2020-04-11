import React from 'react';
import reactDom from 'react-dom';
import App from './components/App/App';
import {init} from "./domain/firebase";

init();
reactDom.render(<App />, document.getElementById('app'));
