const { dir } = require("console");
let fs=require("fs");
const { basename } = require("path");
let path=require("path");
const { send } = require("process");

///
function helpFN(){
    console.log(`
    Commands available:
            node main.js *tree* directory path
            node main.js *organize* directory path
            node main.js *help*`);
    console.log("Implemented help");
}
///
module.exports={
    helpkey:helpFN
}