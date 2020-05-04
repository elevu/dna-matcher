import * as React from "react";
import SNPcard from "./SNPcard";
import "./Results.style.css";


const Results = (results) => {
  return (
    <div className="resultsContainer">
      {results.data.map((SNP) => (
        <SNPcard key={`SNPcard ${SNP.name}`} data={SNP} />
      ))}
    </div>
  );
};

export default Results;
