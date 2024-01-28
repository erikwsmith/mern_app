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

router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '\\/frontend/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

module.exports = router;