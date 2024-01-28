const express = require('express');

const {getRecords, createRecord} = require('../controllers/appControllers');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).json({message: 'React Web App'});
})



//get all records
router.get('/records', getRecords);

//create record
router.get('/create_record', createRecord);


module.exports = router;