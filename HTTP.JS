const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("welcome to the home page");
    }
    if(req.url ==='/about'){
        res.end('there is  the about page');
    }
    res.end(`
    <h1>oops !!</h1>
    <p>we can't find the page you are looking for </p>
    <a href = "/">Back Home</a>
    `);
});

server.listen(4000);









