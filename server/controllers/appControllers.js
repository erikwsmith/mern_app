const Record = require('../models/appModels');
const mongoose = require('mongoose');

// get all records
const getRecords = async(req, res) =>{
    const records = await Record.find({});
    res.status(200).json(records);
};

const createRecord = async(req, res) =>{
    await Record.create({name: 'Pluto', mainAtmosphere: ['H2', 'CO2'], surfaceTemperatureC: {'min': -450, 'max': -240, 'mean': -330}});
    res.status(200).json(await Record.find({name: 'Pluto'}).exec());
};

module.exports = {
    getRecords,
    createRecord    
}