// const http = require("http");
// const fs=require("fs");
// const url=  require("url");
const express=require("express");
const app=express();
app.get('/', (req, res) => {
   return res.send("This is Home Page");
}
// );
);
app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
 }
 ); 


// const myServer = http.createServer((req, res) => {
//     if(req.url==='/favicon.ico'){
//         return res.end();
//     }
//     const log=`${Date.now()} : ${req.method} ${req.url} New Request Received\n`;
//     const myUrl=url.parse(req.url ,true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log ,(err, data )=>{
        // switch(req.url){
//         switch(myUrl.pathname){
//             case '/':
//                 res.end("This is Home Page");
//                 break;
//             case '/about':
//                 res.end("This is About Page");
//                 break;
//             default:
//                 res.end("404 Page Not Found");
//         }
    // });
// //   console.log('Request received');
//   console.log(req);
//   res.end("Hello from my server!");
// });
app.listen(8000, () => console.log("Server Started"));
// const myServer=http.createServer(app);
// myServer.listen(8000, () => console.log("Server Started"));
