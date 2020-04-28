import * as functions from "firebase-functions";
// import { mockResponse } from "./mocks";
import { SNPlist } from "./SNPlist";

// https://firebase.google.com/docs/functions/typescript

export const getNutrigenomicsResults = functions.https.onCall((data) => {
  return findMatches(data);
});

let findMatches = (data: string) => {
  let response: any = [];
  SNPlist.forEach((SNP: any) => {
    var regex = new RegExp('^(.*' + SNP.name + ').*$', 'm');
    const match: any = data.match(regex);
    if (match) {
      const aString = match[0];
      const bases = aString.substring(aString.length - 2);
      response.push({
        name: SNP.name,
        bases: bases,
        type: SNP[bases].type,
        description: SNP[bases].description,
        link: SNP.link,
      });
    }
  });
  return response;
};

//TODO: Type everything
//TODO: make service react file
//TODO: Add tests
//TODO: Refactor this file
