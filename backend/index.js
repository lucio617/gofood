const express=require('express')
const app=express()
const port=5000
const conn=require('./db')

app.use((req,res,next)=>{
    res.setHeader("Access-control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})
conn();

app.get('/',(req,res)=>{
    res.send('Helllew')
})
app.use(express.json());
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use("/api",require("./Routes/OrderData"))
app.listen(port,()=>{
    console.log("Connected to port")
})