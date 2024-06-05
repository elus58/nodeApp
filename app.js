//npm global command comes with node 
//npm --v to check the version


//local dependency >> use it when building a particular project
// npm i <packagename>



//golbal dependency >> use it when building any project
//npm install -g <packagename>


//package.json -->> mainfest file (stoers important info about project/package)
//manual approach (ctreate it in the root,create properties etc...)
//npm init (step by step press enter to escape)
//npm init -y (everything default)

//npm i lodash (utility library )

const _ = require("lodash");
const items = [ 1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
