import * as React from "react";
import SNPcard from "./SNPcard";

const Results = (results) => {
  console.log(results);
  const allResults = results.data.map((SNP) => (
    <SNPcard key={SNP.name} data={SNP} />
  ));
  return (
    <div>
      Results:
      {allResults}
    </div>
  );
};

export default Results;
