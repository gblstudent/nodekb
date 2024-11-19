const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : 'Hello World'
    }); 
});

app.get('/hi', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : 'Hi Everyone'
    }); 
});

app.get('/hi/:name', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : `Hi ${req.params['name']}`
    }); 
});

app.get('/err', (req, res) => {
    throw new Error('Err');
});

app.use(function (err, req, res, next) {
    res.status(500).send({
        'success' : false,
        'message' : 'Internal Error Occured'
    });
    console.log(`${req.method} Request for ${req.url} with ${JSON.stringify(req.body)} and response ${res.statusCode} with error ${err.stack}`);      
});

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);  
});