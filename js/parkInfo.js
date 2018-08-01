let db = require("./db-calls.js");

let parkInfo = {};

db.fetchParkInfo()
   .then((result) => {
   parkInfo = result;
});

module.exports = parkInfo;
