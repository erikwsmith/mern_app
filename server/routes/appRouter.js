const express = require('express');

const {getRecords, createRecord, getPatients} = require('../controllers/appControllers');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).json({message: 'React Web App'});
})

//get all records
router.get('/records', getPatients);

//create record
router.get('/create_record', createRecord);

//get all patients
router.get('/patients', getPatients);

module.exports = router;