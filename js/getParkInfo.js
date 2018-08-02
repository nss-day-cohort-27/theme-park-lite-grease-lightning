"use strict";

// keep functionality sepearate.

// so you will get the park info here and feed it into parkInfo promise 
// but then call it in another function that will take care of writing it to the dom


function getParkInfo(parkInfo) {
    let description = parkInfo[0].description;
    let location = parkInfo[0].location;
    let name = parkInfo[0].name;
    return `description: ${description} <br/> location: ${location} <br/> name: ${name} <br/>`;
}

module.exports = getParkInfo;