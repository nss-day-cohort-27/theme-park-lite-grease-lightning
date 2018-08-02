"use strict";

let db = require("./db-calls.js");
let writeToDom = require("./ncbWriteToDom.js");
let createAttraction = require("./createAttraction.js");

db.fetchAttractions()
   .then((result) => {
   // do stuff here so it happens after data is returned

//    result.forEach(element => {
//        for (const key in element) {
//         //    if (element.hasOwnProperty(key)) {
//                strBuild += `<strong>key</strong>: ${key} <br/>`;
//         //    }
//        }
//    });
//    console.log("logging strBuild");
//    console.log(strBuild);
//    writeToDom(strBuild);
    result.forEach(element => {
        let attractionComponent = createAttraction(element.description, element.name);
        writeToDom(attractionComponent);
    });
});