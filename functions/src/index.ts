import * as functions from 'firebase-functions';

// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onCall((data) => {
    return {
        firstFile: data[0],
        secondFile: data[1],
    }
});
