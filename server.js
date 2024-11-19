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

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);  
});