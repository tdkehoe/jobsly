var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/jobsly');
var Jobsly = db.get('jobsly');

module.exports = router;
