const express= require('express');
const fs= require('fs');
const users= require('./Mock_Data.json');
const app = express();
const PORT = 8000;

// Middleware - Plugin
app.use(express.urlencoded({extended: false}));
app.use((req, res, next)=>{
    console.log("Middleware called");
    // return res.json({Status: "Server is up and running"}); 
    next();
});


app.get("/users", (req,res)=>{
    const html= `
    <ul>
        ${users.map(user=> `<li>${user.first_name}</li>`).join('')}
    </ul>
    ` ;
    res.send(html);
});
// Rest API
app.get("/api/users",(req,res)=>{
    return res.json(users);
});

app
.route("/api/users/:id")
// Get user by ID
.get((req,res)=>{
const id= Number(req.params.id);
const user= users.find((user)=> user.id === id);
return res.json(user);
})
//Patch user by ID
.patch((req,res)=>{
    // const body= req.body;
    // users.patch({ ...body, id: req.params.id});
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
    // return res.json({Status: "Success", id: req.params.id});
    // });
    return res.json({Status: "Pending"});
})
//Delete user by ID
.delete((req,res)=>{
    return res.json({Status: "Pending"});
});

app.post("/api/users",(req,res)=>{
    const body= req.body;
    users.push({ ...body, id: users.length + 1});
fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
return res.json({Status: "Success", id: users.length});
});
    // first_name= body.first_name;
    // last_name= body.last_name;
    // email= body.email;
    // gender= body.gender;    OR

// console.log("body", body);
    // return res.json({Status: "Pending"});
});


app.listen(PORT, () => {console.log(`Server started at port: ${PORT}`);});