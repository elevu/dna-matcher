import * as functions from 'firebase-functions';
import {mockResponse} from './mocks'

// https://firebase.google.com/docs/functions/typescript

export const getNutrigenomicsResults = functions.https.onCall((data) => {
    return mockResponse
});
