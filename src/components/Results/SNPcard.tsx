import * as React from "react";

const SNPcard = (snp) => {
  return (
    <div key={`Card ${snp.data.name}`}>
      <div key={`Name ${snp.data.name}`}>{snp.data.name}</div>
      <div key={`${snp.data.bases}${snp.data.name}`}>
        {snp.data.bases}
      </div>
      <div key={`${snp.data.name}${snp.data.type}`}>{snp.data.type}</div>
      <div key={`${snp.data.description}${snp.data.name}`}>
        {snp.data.description}
      </div>
      <a href={`${snp.data.name}${snp.data.name}`} key={snp.data.name}>
        SNPEDIA link
      </a>
      <br></br>
      <br></br>
    </div>
  );
};

export default SNPcard;
