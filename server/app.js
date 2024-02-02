require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const appRouter = require('./routes/appRouter');
const mongoose = require('mongoose');
const sql = require('mssql');
const sqlConfig = {
    user: 'eriksmith85', // better stored in an app setting such as process.env.DB_USER
    password: 'Sher-Bear@14', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'esmith.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'hospital-records', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}
const appPool = new sql.ConnectionPool(sqlConfig);

//middleware
//const corsOptions = {origin: 'http://localhost:3000'};
const corsOptions = {origin: 'https://erik-smith-capstone-client.onrender.com/'};
//const corsOptions = {origin: '*'};


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

app.use(express.json());
app.use(cors(corsOptions));

//route
app.use('/', appRouter);

