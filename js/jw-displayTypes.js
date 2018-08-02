"use strict";
let stringUppercase = require("./jwTitleCase");

function displayTypes (type){
    console.log("Types: ", type);
    let areaDiv = document.querySelector("#jw-type");
    type.forEach(type => {
        areaDiv.innerHTML += 
        `<div class="type${type.id}">
        <h2>${stringUppercase(type.name)}</h2>
        </div>`;
    });
};


module.exports = displayTypes;

