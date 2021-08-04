let fs=require("fs");
let path=require("path");
function display(pathName){


    if(fs.lstatSync(pathName).isFile()==false)
    {
        console.log("Path is Not Valid For File");
    return;
    }

    console.log("Display Content Implemented");
    let content=fs.readFileSync(pathName);

   return content;

}

module.exports={
display:display
}