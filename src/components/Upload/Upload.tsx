import * as React from "react"
import './Upload.style.css'
import * as firebase from 'firebase'
import {getNutrigenomicsResults} from "../../../functions/src";
import Dropzone from 'react-dropzone'


const submitFiles = files => {
    console.log('calling sub files');
    var addMessage = firebase.functions().httpsCallable('getNutrigenomicsResults');
    addMessage(files).then(function (result) {
        console.log(JSON.stringify(result))
    });

};

const Upload = () => {
    return (
        <div className='container'>
            <Dropzone onDrop={acceptedFiles => submitFiles(acceptedFiles)} accept='.txt'>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                                Drag and drop your 23andme results here.
                                The file should be unzipped with .txt extension
                            </p>
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    )
};

export default Upload
