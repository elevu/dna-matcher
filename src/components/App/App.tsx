import * as React from "react";
import "./App.style.css";
import AppContainer from "../AppContainer/AppContainer";
import Logo from "../../assets/dna-match-logo.png";

const App = () => {
  return (
    <div className="grids">
      <div className="header">
        <img src={Logo}></img>
      </div>
      <div className="appContainer">
        <AppContainer />
      </div>
      <div className="headerImage">
        <div className="headerText1">Analyze your DNA</div>
        <div className="headerSubtitle1">
          Upload your raw data and <br /> find out which variants are <br />
          unique of your genome and <br /> influence the way your body processes
          nutrients
        </div>
        <div className="headerText2">Optimize</div>
        <div className="headerSubtitle2">
          Taylor the daily requirement of different nutrients based on your
          genetic profile
        </div>
      </div>
      <div className="footer">
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
