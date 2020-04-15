import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCdo9hg4vF8oqQt4dmc0CZ_Hh99a1XM98I",
    authDomain: "dna-match.firebaseapp.com",
    projectId: "dna-match",
    storageBucket: "dna-match.appspot.com",
    messagingSenderId: "187995846003",
    appId: "1:187995846003:web:68ad8f0972651b67934106"
};

export const init = () => {
    firebase.initializeApp(firebaseConfig);
    if (process.env.NODE_ENV === 'development') {
        firebase.functions().useFunctionsEmulator("http://localhost:5000");
    }
};
