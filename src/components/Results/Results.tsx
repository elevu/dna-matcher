import * as React from "react";
import SNPcard from "./SNPcard";

const Results = (results) => {
  return (
    <div>
      {results.data.map((SNP) => (
        <SNPcard key={`SNPcard ${SNP.name}`} data={SNP} />
      ))}
    </div>
  );
};

export default Results;
