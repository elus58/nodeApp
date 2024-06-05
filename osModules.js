
// //modules
// // commonJs ,every file is module(by default)
// //modules encapsulated  code (only share minimum)

// const names = require('./names');
// const sayHi = require('./utils');
// const data = require('./alternativeFlavor');
// console.log("____-___-____-");
// require("./mind-gernade");
// // console.log(names.john);
// console.log(names);
// console.log(sayHi);
// console.log(data);
// //////  \\\\\\\
// console.log("==========================");
// sayHi("suzan");
// sayHi(names.j);
// sayHi(names.p);
//========================================================================================================================================================================//

const os = require('os')
// info about current user
const user = os.userInfo()

// console.log(user);
// methods return the system uptime in secs
console.log(`the system uptime is${os.uptime()} secs`);




const currentOs ={
    name:os.type(),
    release:os.release(),
    totalMem :os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);



