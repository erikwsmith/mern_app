const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const databaseSchema = new Schema({
    name: {type: String, required: true},
    orderFromSun: Number,
    hasRings: Boolean,
    mainAtmosphere: [String],
    surfaceTemperatureC: {
        min: Number, max: Number, mean: Number
    }

}, {collection: 'planets', timestamps: true});

module.exports = mongoose.model('Record', databaseSchema);