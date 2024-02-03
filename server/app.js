require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const appRouter = require('./routes/appRouter');
const mongoose = require('mongoose');
const sql = require('mssql');
const sqlConfig = require('./config/AzureSQL');
const appPool = new sql.ConnectionPool(sqlConfig);

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Reqeuested-With, Content-Type, Accept");
    next();
})

// Connect to MONGO DB
mongoose.connect(process.env.MONGO_URI).then( () => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`App is listening on PORT ${PORT} and connected to MONGO DB!`);
    })
}).catch(err => {
    console.log(err);
})

//connect to AZURE SQL DB
appPool.connect().then(function(pool) {
    app.locals.db = pool;
    console.log('App is connected to Azure SQL Database!')
}).catch(function(err) {
    console.error('Error creating connection pool', err)
});



//route
app.use('/', appRouter);

