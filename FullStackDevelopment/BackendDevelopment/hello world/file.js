const fs= require("fs");


// fs.writeFileSync("./example.txt", "Hello, World!");
// Blocking Request
// const result= fs.readFileSync("./unknown.txt", "utf-8");
// console.log(result);


// fs.readFile("./unknown.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error reading file:", err);
//     }
//             else{
//                 console.log("File content:", result);
//             }
//         }
// );

// fs.appendFile("./NOTES.txt",'${Date.now()} Hey There\n ');
// fs.cpSync("./unknown.txt", "./copy_of_unknown.txt");
// fs.unlinkSync("./copy_of_unknown.txt");
// console.log(fs.statSync("./NOTES.txt").isFile());
// fs.mkdirSync("./my-docs/a/b", { recursive: true });

// console.log("1");
// // Non-Blocking Request
// fs.readFile("./unknown.txt", "utf-8", (err, result) => {
//     console.log(result);
// }); 
// console.log("2");   


const os= require("os");
console.log(os.cpus().length);