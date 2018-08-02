"use strict";

// const ncb = document.querySelector("#ncb-attractions");

function writeToDom(stuff) {
    createCard(stuff);
    // ncb.innerHTML += stuff;
}

function createCard(stuff) {
    let divAppend = document.querySelector("#ncb-attractions");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "ncbAttractionCard");
    newDiv.style.backgroundColor = "orange";
    newDiv.style.opacity = 0.89;
    newDiv.innerHTML += stuff;
    divAppend.appendChild(newDiv);
}

module.exports = writeToDom;