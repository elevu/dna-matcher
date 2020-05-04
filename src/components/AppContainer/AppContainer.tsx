import * as React from "react";
import "./AppContainer.style.css";
import * as firebase from "firebase";
import { getNutrigenomicsResults } from "../../../functions/src";
import Dropzone from "react-dropzone";
import Results from "../Results/Results";
import loadingDNA from "../../assets/loadingDNA.gif";
import AndmeLogo from "../../assets/23andmelogo.svg";
import LivingDNALogo from "../../assets/livingDNAlogo.png";


const AppContainer = () => {
  const [showUpload, setShowUpload] = React.useState(true);
  const [results, setResults] = React.useState([]);

  const submitFile = (files) => {
    var allResults: any = [];
    var addMessage = firebase
      .functions()
      .httpsCallable("getNutrigenomicsResults");
    files.map((file) => {
      return addMessage(file).then(function (result) {
        allResults.push(...result.data);
        let tempArray: any = [...allResults];
        setResults(tempArray);
      });
    });
  };

  const onDrop = React.useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        submitFile(divideIntoSubstrings(reader.result));
        setShowUpload(false);
      };
      reader.readAsText(file);
    });
  }, []);

  const loadSampleFile = () => {
    fetch("https://storage.googleapis.com/dna-match/raw_data.txt").then((res) =>
      res.blob().then((blob) =>
        blob.text().then((aText) => {
          submitFile(divideIntoSubstrings(aText));
          setShowUpload(false);
        })
      )
    );
  };

  const divideIntoSubstrings = (text) => {
    const textLenght: number = text.length;
    const textGroup: any = [];
    console.log(text);
    textGroup.push(text.substring(0, Math.floor(textLenght / 2)));
    textGroup.push(text.substring(Math.floor(textLenght / 2), textLenght));
    return textGroup;
  };

  return (
    <div className="container">
      {showUpload && (
        <div>
          <div className="supportText">Supporting raw data files from</div>
          <div className="supportImages">
            <img src={AndmeLogo}></img>
            <img src={LivingDNALogo}></img>
          </div>
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
          <button onClick={loadSampleFile}>
            ... or try out with sample data
          </button>
        </div>
      )}
      {results.length > 0 && <Results data={...results} />}
      {results.length <= 0 && !showUpload && <img src={loadingDNA} />}
    </div>
  );
};

export default AppContainer;
