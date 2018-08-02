"use strict";

let db = require("./db-calls.js");
let parkComponent = require("./parkComponent.js");
let parkInfoDom = require("./parkInfoDom.js");

db.fetchParkInfo()
   .then((result) => {
    let descr = "";
    let loc = "";
    let name = "";
    let closing = "";
    let opening = "";
    
    result.forEach(element => {
       descr = element.description;
       loc = element.location;
       name = element.name;
       if (element === "operating_hours") {
         element.forEach(element => {
            closing = element.closing;
            opening = element.opening;
         });
       }
       
    });
});
