import * as React from "react";

const SNPcard = (snp) => {
  return <p>
    <div>Name: {snp.data.name}</div>
    <div>Base: {snp.data.bases}</div>
    <div>Type: {snp.data.type}</div>
    <div>Description: {snp.data.description}</div>
  </p>;
};

export default SNPcard;
