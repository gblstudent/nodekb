var express = require('express');
var router = express.Router();

router.get('/err', (req, res) => {
    throw new Error('Err');
});

router.get('/', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : 'Hi Everyone'
    }); 
});

router.get('/:name', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : `Hi ${req.params['name']}`
    }); 
});

router.get('/err2', (req, res) => {
    throw new Error('Err');
});


module.exports = router;