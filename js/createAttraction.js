"use strict";

// area_id, description, id, name, type_id
function createAttraction(description, name) {
    createCard();
    return `<h1>${name}</h1>
    <p>${description}</p>`;


// function createAttraction(area_id, description, id, name, type_id) {
    // return `<h1>${area_id}</h1>
    //         <p>Description: ${description}</p>
    //         <p>${id}</p>
    //         <p>${name}</p>
    //         <p>${type_id}</p>`;
}

function createCard() {
    let divAppend = document.querySelector("#ncb-attractions");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "ncbAttractionCard");
    divAppend.appendChild(newDiv);
}

module.exports = createAttraction;