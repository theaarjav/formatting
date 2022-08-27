#!/usr/bin/env node

const { dir } = require("console");
let fs=require("fs");
const { basename } = require("path");
let path=require("path");
const { send } = require("process");
let helpObj=require("./commands/help");
let treeObj=require("./commands/tree");
let organizeObj=require("./commands/organize")
let input=process.argv.slice(2);
// console.log(input);

let command=input[0];

switch(command){
    case "tree":
       treeObj.treekey(input[1]);
        break;
    case "organize":
        organizeObj.organizekey(input[1]);
        break;
    case "help":
        helpObj.helpkey();
        break
    default:
        console.log("Not a valid case");
}

// let types={
//     media:["mkv","mp4","mp3"],
//     archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
//     documents:["docx","csv","doc","pdf","xls","xlsx","odt","ods","odp","odg","odf","txt","ps"],
//     app:["exe","dmg","pkg","deb"],
//     image:["jpg","png"],
// }
// module.exports=utility;


