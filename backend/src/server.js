require('dotenv').config({ path: './.env' });
console.log("Loaded PORT from .env:", process.env.PORT); // Debugging statement
const express = require('express');
const postroutes = require('../routes/posts')
const app = express();
const mongoose = require('mongoose')

app.use((req,res,next)=>{
    console.log(req.path);
    next();
});

app.use(express.json())

app.use('/api/routes',postroutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening on port : ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})
const PORT = process.env.PORT