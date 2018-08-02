"use strict";

const ncb = document.querySelector("#ncb-attractions");

function writeToDom(stuff) {
    ncb.innerHTML += stuff;
}

module.exports = writeToDom;