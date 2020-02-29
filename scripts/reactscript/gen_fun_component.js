const fs = require("fs");
const path = require("path");

//console.log("input argument"+process.argv);
console.log("present dir name "+__dirname);

let newFilename = process.argv[2]+".js";
console.log("new file name :"+newFilename);
let newfilenamePath = path.join(__dirname,newFilename);
console.log("new file complete path :"+newfilenamePath);
let templateFilePath =  process.argv[1];
templateFilePath=path.dirname(templateFilePath);
templateFilePath=path.join(templateFilePath,"templates","fun_comp.txt");
console.log("temp file path is :"+templateFilePath);

const transform = function(data){
    //if(typeof data === "string"){
       return data.toString().replace(/<name>/g,process.argv[2]);
    //}
    //return data;
}


fs.readFile(templateFilePath,(err,data)=>{  
    if(!err){
         console.log("data is:"+data);
         fs.writeFile(newfilenamePath,transform(data),(err)=>{
            console.log(err);
            
         })
    };
    
    //console.log("")
  })

// fs.readFile("",(err,data)=>{
//   fs.writeFile
// })
