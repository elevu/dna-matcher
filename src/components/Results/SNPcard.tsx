import * as React from "react";
import "./SNPcard.style.css";

const SNPcard = (snp) => {
  const headerColors = {
    positive: "#ACFCCD",
    negative: "#FF7666",
    neutral: "#CACCCB",
  };
 
  return (
    <div className="card">
      <div className="cardHeader" style={{borderColor: `${headerColors[snp.data.type]} ${headerColors[snp.data.type]} transparent ${headerColors[snp.data.type]}`}}></div>
      <div key={`Name ${snp.data.name}`} className="cardTitle">
        {snp.data.name}
      </div>
      <div key={`${snp.data.bases}${snp.data.name}`} className="cardBase">
        {snp.data.bases}
      </div>
      <div key={`${snp.data.name}${snp.data.type}`} className="cardType">
        {snp.data.type}
      </div>
      <div
        key={`${snp.data.description}${snp.data.name}`}
        className="cardDescription"
      >
        {snp.data.description}
      </div>
      <a
        href={snp.data.link}
        key={`${snp.data.name}${snp.data.link}`}
        className="cardLink"
      >
        {snp.data.link}
      </a>
      <br></br>
      <br></br>
    </div>
  );
};

export default SNPcard;
