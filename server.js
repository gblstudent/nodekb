const express = require('express');

const app = express();
var basic01 = require('./app/controller/Basic01');

app.get('/', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : 'Hello World'
    }); 
});

app.use('/api/v1/basic01', basic01);

app.use(function (err, req, res, next) {
    res.status(500).send({
        'success' : false,
        'message' : 'Internal Error Occured'
    });
    console.log(`${req.method} Request for ${req.url} with ${JSON.stringify(req.body)} and response ${res.statusCode} with error ${err.stack}`);      
});

app.use(function(req, res) {
    res.status(404).send({
        'success' : false,
        'message' : 'Not Found'
    });
});

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);  
});