const {readFile,writeFile} = require("fs");
console.log('start');
readFile("./content/first.txt",'utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = res;
    readFile("./content/sec.txt",'utf-8',(err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/asyncfile.txt',`here is the result : ${first} ,${second}`,(err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with  this task');
    });
            
        });
        
            });
            console.log('starting next task');
