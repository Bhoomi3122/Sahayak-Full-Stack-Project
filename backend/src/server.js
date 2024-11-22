require('dotenv').config({ path: './.env' });
const express = require('express');
const postroutes = require('../routes/posts')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL in production
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type, Authorization' // Add more headers if needed
  }));

app.use((req,res,next)=>{
    console.log(req.path);
    next();
});
 
app.use(express.json())

app.use('/api/routes',postroutes)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 4000
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening on port : ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})
