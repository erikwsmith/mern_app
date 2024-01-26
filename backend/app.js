require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const appRouter = require('routes/Router');

//middleware
//const corsOptions = {origin: 'http://localhost:3000'};
const corsOptions = {origin: 'https://erik-smith-capstone-client.onrender.com'};


app.use(express.json());
app.use(cors(corsOptions));

//connect MONGO_DB
mongoose.connect(process.env.MONGO_URI).then( () => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`App is listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
})

//route
app.use('/', appRouter);