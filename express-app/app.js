var express = require('express');
var bodyParser = require('body-parser');
var jobsly = require('./routes/routes');

var app = express();

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/jobsly', jobsly);

app.listen(process.env.PORT || 8080);
console.log("Server started on localhost://8080");
