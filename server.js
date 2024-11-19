require('dotenv').config();
var morgan = require('morgan');
var winston = require('./app/config/winston');
var cors = require('cors');
var compression = require('compression');
var helmet = require('helmet');

const express = require('express');
const bodyParser = require('body-parser');
const mySqlPool = require('./app/config/db');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan('combined', { stream: winston.stream }));

var basic01 = require('./app/controller/Basic01');
var basic02 = require('./app/controller/Basic02');

const envport = process.env.PORT || 9999
const envname = process.env.NODE_ENV || 'CODE'

app.get('/', (req, res) => {
    res.status(200).send({
        'success' : true,
        'message' : 'Hello World'
    }); 
});

app.use('/api/v1/basic01', basic01);
app.use('/api/v1/blogs', basic02);

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

mySqlPool.query("select 1").then( () => {
    console.log("Database WORKING");
    app.listen(envport, () => {
        console.log(`Server listening on port ${envport} with ${envname} config`);  
      });
}).catch( (err) => {
    console.log(err);
});