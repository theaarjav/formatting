const { dir } = require("console");
let fs=require("fs");
const { basename } = require("path");
let path=require("path");
const { send } = require("process");

function organizeFN(dirPath){
    let destPath;
    if(dirPath==undefined){
        destPath=process.cwd();
        return;
    }
    else{
        if(!fs.existsSync(dirPath)){
            console.log("Above address does not exist, kindly enter correct address.");
            return;
        }
        destPath=path.join(dirPath,"organized_files");
        if(!fs.existsSync(destPath)){
            console.log("Folder Created");
            fs.mkdirSync(destPath);
        }
    }
    organizehelper(dirPath, destPath);
    console.log("Implemented organize for ",dirPath);
}




function organizehelper(src, dest){
    console.log("Helper Function Started");
    let child=fs.readdirSync(src);
    for(let i=0;i<child.length;i++){
        let childAddress=path.join(src,child[i]);
        if(fs.lstatSync(childAddress).isFile()){
            let category=getCategory(child[i]);
            console.log(child[i],"belongs to category->",category);
            sendFile(childAddress,dest,category);
        }
    }
    console.log(child);
}
function sendFile(srcFile,dest,category){
    let categoryPath=path.join(dest,category);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath);
    }
    let srcAdd=path.basename(srcFile);
    let destFilePath=path.join(categoryPath,srcAdd);
    fs.copyFileSync(srcFile,destFilePath);
}
function getCategory(name){
    let types={
        media:["mkv","mp4","mp3"],
        archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
        documents:["docx","csv","doc","pdf","xls","xlsx","odt","ods","odp","odg","odf","txt","ps"],
        app:["exe","dmg","pkg","deb"],
        image:["jpg","png"],
    }
    let ext=path.extname(name);
    ext = ext.slice(1);
    for(let type in types){
        let categtype=types[type];
        for(let i=0;i<categtype.length;i++){
            if(ext==categtype[i]){
                return type;
            }
        }
    }
    return "Others";
}

module.exports={
    organizekey:organizeFN
}