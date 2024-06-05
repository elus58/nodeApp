const {readFileSync,writeFileSync} = require("fs");

const first = readFileSync("./content/first.txt",'utf8')
const second = readFileSync("./content/sec.txt",'utf8')

console.log(first);
console.log(second);
writeFileSync("./content/result-sync.txt","ere i create a file using node.js and i wrote inside itere \ni create a file using node.js and i wrote inside itere\n i create a file using node.js and i wrote inside it ", {flag:'a'});
