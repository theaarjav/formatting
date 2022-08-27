const { dir } = require("console");
let fs=require("fs");
const { basename } = require("path");
let path=require("path");
const { send } = require("process");
function treeFN(dirPath){
    let destPath;
    if(dirPath==undefined){
        treehelper(process.cwd(), " ");
        return;
    }
    else{
        if(!fs.existsSync(dirPath)){
            console.log("Above address does not exist, kindly enter correct address.");
            return;
        }
        treehelper(dirPath, " ");
    }
    console.log("Implemented tree for ",dirPath);
}
function treehelper(dirPath, indent){
    let File = fs.lstatSync(dirPath).isFile();
    if(File){
        let fileName=path.basename(dirPath)
        console.log(indent+"|--"+fileName);
    }
    else{
        let dirName=path.basename(dirPath);
        console.log(indent+"|--"+dirName);
        let children=fs.readdirSync(dirPath);
        for(let i=0;i<children.length;i++){
            let childPath=path.join(dirPath, children[i]);
            treehelper(childPath,indent+"\t");
        }
    }
}

module.exports={
    treekey:treeFN
}