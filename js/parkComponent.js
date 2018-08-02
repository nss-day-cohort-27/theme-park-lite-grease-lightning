"use strict";

function parkComponent(description, location, name, closing, opening) {
    // need to loop through an array of objects to get hours

    // return template string literal/interpolation to write to DOM
    return `<h1>${name}</h1>
    <p>${description}</p>
    <p>${location}</p>
    <p>${closing}</p>
    <p>${opening}</p>`;
}




module.exports = parkComponent;