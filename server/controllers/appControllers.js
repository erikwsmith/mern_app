const Record = require('../models/appModels');
const mongoose = require('mongoose');

// get all records
const getRecords = async(req, res) =>{
    const records = await Record.find({}).sort({orderFromSun: 'asc'});
    res.status(200).json(records);
};

const createRecord = async(req, res) =>{
    await Record.create({name: 'Pluto', mainAtmosphere: ['H2', 'CO2'], surfaceTemperatureC: {'min': -450, 'max': -240, 'mean': -330}});
    res.status(200).json(await Record.find({name: 'Pluto'}).exec());
};

// Get patient records from SQL Server
const getPatients = async(req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    await req.app.locals.db.query(
        `SELECT * 
        FROM [SalesLT].[ProductCategory] 
        FOR JSON PATH`
    , (err, recordSet) => {
        if (err) {
            console.error(err);
            res.status(500).send('SERVER ERROR');
            return;
        }
        const obj = Object.values(Object.values(Object.values(recordSet)[0])[0][0])[0];
        const parsedObj = JSON.parse(obj);
        res.status(200).json(parsedObj);
    });
};

module.exports = {
    getRecords,
    createRecord,
    getPatients    
}