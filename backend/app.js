const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

//middleware
const corsOptions = {origin: 'http://localhost:3000'};

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
app.get('/', (req, res) => {
    res.status(201).json({message: 'Connected to Backend!'});
})