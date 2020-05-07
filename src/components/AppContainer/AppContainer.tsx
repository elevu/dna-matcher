import * as React from "react";
import "./AppContainer.style.css";
import * as firebase from "firebase";
import { getNutrigenomicsResults } from "../../../functions/src";
import Dropzone from "react-dropzone";
import Results from "../Results/Results";
import loadingDNA from "../../assets/loadingDNA.gif";
import AndmeLogo from "../../assets/23andmelogo.svg";
import LivingDNALogo from "../../assets/livingDNAlogo.png";
import { motion } from "framer-motion";

const AppContainer = () => {
  const [showUpload, setShowUpload] = React.useState(true);
  const [showLoading, setShowLoading] = React.useState(true);
  const [results, setResults] = React.useState([]);
  const [hasNoResults, setHasNoResults] = React.useState(false);

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
        if (allResults.length === 0 && result.data.length === 0)
          setHasNoResults(true);
        else setShowLoading(false);
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
        loadingTime;
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

  const loadingTime = setTimeout(() => {
    if (results.length > 0 || hasNoResults) setShowLoading(false);
  }, 10000);

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
                    Drag and drop your genomic raw data here. The file should be
                    unzipped with a .txt extension
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
          <button onClick={loadSampleFile}>
            ... or try out with our sample data
          </button>
        </div>
      )}
      {results.length > 0 && !showLoading && <Results data={...results} />}
      {!showUpload && showLoading && (
        <div className="loadingAnimation">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              loop: Infinity,
            }}
          />
        </div>
      )}
      {hasNoResults && !showLoading && <div>No SNPs found, wrong file?</div>}
    </div>
  );
};

export default AppContainer;
