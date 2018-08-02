"use strict";
let db = require("./db-calls.js");
let displayTypes = require("./jw-displayTypes");

console.log("working");

let attractionTypes = {};

db.fetchTypes()
   .then((result) => {
   attractionTypes = result;
   
   displayTypes(attractionTypes);
}) 

module.exports = attractionTypes;
