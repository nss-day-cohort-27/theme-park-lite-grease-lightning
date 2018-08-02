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
       //console.log("checking if element is operating hours");
       opening = element.operating_hours[0].closing;
       closing = element.operating_hours[0].opening;
      
       
    });

    parkInfoDom(parkComponent(descr, loc, name, closing, opening));
});
