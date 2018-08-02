"use strict";
let db = require("./db-calls.js");
let displayTypes = require("./jw-displayTypes");

console.log("working");

let attractionTypes = {};

db.fetchTypes()
   .then((result) => {
   attractionTypes = result;
   displayTypes(attractionTypes);
});

// $('#jw-type')

// querySelector('#jw-type").innerhtml    

module.exports = attractionTypes;


////////////////


