const {randomBytes} = require('crypto');
var express = require('express');
var router = express.Router();

const blogs ={};

router.get('/', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : 'Data retrived',
        'data' : blogs
    }); 
});

router.post('/', (req, res) => {
    const id = randomBytes(6).toString('hex');
    const {title} = req.body;
    blogs[id] = {
      id, title
    };
    res.status(201).send({
        'success' : true,
        'message' : 'Record Created',
        'data' : blogs[id]
    });   
});


module.exports = router;