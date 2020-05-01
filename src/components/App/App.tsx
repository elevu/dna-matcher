import * as React from "react";
import "./App.style.css";
import AppContainer from "../AppContainer/AppContainer";
import Logo from '../../assets/dna-match-logo.png'

const App = () => {
  return (
    <div>
    <img src={Logo}></img>
      <AppContainer />
    </div>
  );
};

export default App;
