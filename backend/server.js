const express = require('express');
const dotenv = require('dotenv')
const app = express();
const cookieParser = require('cookie-parser')
const authRoute = require("./Routes/authroute");
const connectToDb = require('./Database');
const messageRoute = require('./Routes/messageRoute')
const userRoute = require('./Routes/userRoute')


dotenv.config({path:'./config.env'})

const port =process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser());

// app.get("/",(req,res)=>{
//     res.send("Hello World !!");
// })

app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute);
app.use("/api/users",userRoute);

app.listen(port,()=>{
    connectToDb();
    console.log(`Server connected to Port ${port}`)
})
