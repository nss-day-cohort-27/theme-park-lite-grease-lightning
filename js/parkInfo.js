"use strict";

let db = require("./db-calls.js");
let getParkInfo = require("./getParkInfo.js");

db.fetchParkInfo()
   .then((result) => {
//    do stuff here so it happens after data is returned
//    console.log("test", parkInfo);
// right now you are console logging the invocation of getParkInfo w/
// parkInfo as an arg.  
// you need to write another function that will write this information to the dom
// this is how you keep the functionality all separate
//     console.log("Park info", getParkInfo(parkInfo));
});

