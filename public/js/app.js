"use strict";
//import Tile from "./Tile";
//const tile = new Tile("", [2, 2]);
//console.log("hello", tile);
const container = document.getElementById("container");
if (!container) {
    console.log("Container doesn't exist");
}
else {
    console.log("ok");
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);
}
