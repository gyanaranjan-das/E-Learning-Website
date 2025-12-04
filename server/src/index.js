const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

//load env variables
dotenv.config();

//initialize app

const app = express();

//middleware configuration
app.use(helmet);
app.use(morgan('dev'));

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

/basic test route
app.get('/',(req,res)=>{
    res.status(200).json({
        message:'E-learning API is running',
        status:'success'
    });
});

//Global error handler
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({
        status:'error',
        message:'Internal Server Error'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('server is running in ${process.env.NODE_ENV} mode on port ${PORT}');
});