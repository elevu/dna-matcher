import * as React from "react";
import "./AppContainer.style.css";
import * as firebase from "firebase";
import { getNutrigenomicsResults } from "../../../functions/src";
import Dropzone from "react-dropzone";
import Results from "../Results/Results";

const AppContainer = () => {
  const [showUpload, setShowUpload] = React.useState(true);
  const [results, setResults] = React.useState([]);

  const submitFile = (files) => {
    var addMessage = firebase
      .functions()
      .httpsCallable("getNutrigenomicsResults");
    return addMessage(files).then(function (result) {
      setResults(result.data);
    });
  };

  const onDrop = React.useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        //console.log(reader.result);
        submitFile(reader.result);
        setShowUpload(false);
      };
      reader.readAsText(file);
    });
  }, []);

  return (
    <div className="container">
      {showUpload && (
        <Dropzone
          onDrop={(acceptedFiles) => onDrop(acceptedFiles)}
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
      )}
      {results.length > 0 && <Results data={results} />}
      {results.length < 0 && !showUpload && <div>Loading..</div>}
    </div>
  );
};

export default AppContainer;
