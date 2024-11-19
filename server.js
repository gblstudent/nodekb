const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');  
});

app.get('/hi', (req, res) => {
    res.send('Hi Everyone');  
});

app.get('/hi/:name', (req, res) => {
    res.send(`Hi ${req.params['name']}`);  
});

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);  
});