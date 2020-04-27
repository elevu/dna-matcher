import * as React from "react";
import "./Upload.style.css";
import * as firebase from "firebase";
import { getNutrigenomicsResults } from "../../../functions/src";
import Dropzone from "react-dropzone";
import Results from "../Results/Results";

const Upload = () => {
  const [showUpload, setShowUpload] = React.useState(true);
  const [results, setResults] = React.useState([]);

  const submitFiles = (files) => {
    var addMessage = firebase
      .functions()
      .httpsCallable("getNutrigenomicsResults");
    return addMessage(files).then(function (result) {
      setResults(result.data);
    });
  };

  const hideUpload = (acceptedFiles) => {
    setShowUpload(false);
    submitFiles(acceptedFiles);
  };
  if (showUpload) {
    return (
      <div className="container">
        <Dropzone
          onDrop={(acceptedFiles) => hideUpload(acceptedFiles)}
          accept=".txt"
          multiple={false}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>
                  Drag and drop your 23andme results here. The file should be
                  unzipped with .txt extension
                </p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
  if (results.length > 0) {
    return <Results data={results} />;
  } else return <div>Calculating your results...</div>;
};

export default Upload;
