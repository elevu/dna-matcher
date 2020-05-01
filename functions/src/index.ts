import * as functions from "firebase-functions";
import { SNPlist } from "./SNPlist";

// https://firebase.google.com/docs/functions/typescript

export const getNutrigenomicsResults = functions.https.onCall((data) => {
  return findMatches(data);
});

let findMatches = (data: string) => {
  let response: any = [];
  SNPlist.forEach((SNP: any) => {
    var regex = new RegExp("^(.*" + SNP.name + ").*$", "m");
    const match: any = data.match(regex);
    if (match) {
      const aString = match[0];
      const bases = aString.substring(aString.length - 2);
      let localEntry = {
        name: SNP.name,
        bases: bases,
        link: SNP.link,
        type: "",
        description: "",
      };

      (localEntry.type = SNP[bases] ? SNP[bases].type : "n/a"),
        (localEntry.description = SNP[bases] ? SNP[bases].description : "n/a"),
        response.push(localEntry);
    }
  });
  return response;
};

//TODO: Type everything
//TODO: make service react file
//TODO: Add tests
//TODO: Refactor this file
