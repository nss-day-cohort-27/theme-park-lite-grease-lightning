"use strict";



function printArea (taco){
    console.log("hey", taco);
    let areaDiv = document.querySelector("#kr-park-areas");
    taco.forEach(item => {
        areaDiv.innerHTML += 
        `<div class="type${item.id}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        </div>`;
    });
};

module.exports = printArea;