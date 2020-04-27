import * as React from 'react';

const Results = (results) => {
  console.log(results.results);
  console.log(results.results.length);
  const allResults = results.results.map((element) => (
    <li key={element.name}>Name: {element.name}</li>
  ));
  return (
    <div>
      Here al the results:
      {allResults}
    </div>
  );
};

export default Results;
