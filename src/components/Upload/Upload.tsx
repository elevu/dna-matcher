import * as React from "react"
import './Upload.style.css'
import * as firebase from 'firebase'
import {helloWorld} from "../../../functions/src";


const submitFiles = (files)=> {
    var addMessage = firebase.functions().httpsCallable('helloWorld');
    addMessage(files).then(function(result) {
        console.log('Result' + result)
    });

};


const Upload = () => {
    let file1: any[] = [];

    const setFile=event=>{
        file1[event.target.name] = event.target.files[0];
        console.log(file1)
    };
    return (
        <div>
            <input type="file" name="0" onChange={setFile}/>
            <input type="file" name="1" onChange={setFile}/>
            <button onClick={() => submitFiles(file1)}>Submit</button>
        </div>
    )
};



export default Upload

