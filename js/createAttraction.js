"use strict";

// area_id, description, id, name, type_id
function createAttraction(description, name) {
    // createCard();
    return `<h1>${name}</h1>
    <p>${description}</p>`;


// function createAttraction(area_id, description, id, name, type_id) {
    // return `<h1>${area_id}</h1>
    //         <p>Description: ${description}</p>
    //         <p>${id}</p>
    //         <p>${name}</p>
    //         <p>${type_id}</p>`;
}

module.exports = createAttraction;

