"use strict";

function parkInfoDom(stuff) {
    createParkCard(stuff);
}

function createParkCard(stuff) {
    let divAppend = document.querySelector("#welcome");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "welcomeCard");
    // newDiv.style.backgroundColor = "orange";
    // newDiv.style.opacity = 0.89;
    newDiv.innerHTML += stuff;
    divAppend.appendChild(newDiv);
}

module.exports = parkInfoDom;