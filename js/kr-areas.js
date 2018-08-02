"use strict";

let db = require("./db-calls.js");
let printArea = require("./kr-dom");


db.fetchAreas()
   .then((result) => {
   printArea(result);
});



