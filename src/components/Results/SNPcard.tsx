import * as React from "react";

const SNPcard = (snp) => {
  return <p>
    <li>Name: {snp.data.name}</li>
    <li>Base: {snp.data.bases}</li>
    <li>Type: {snp.data.type}</li>
    <li>Description: {snp.data.description}</li>
  </p>;
};

export default SNPcard;
