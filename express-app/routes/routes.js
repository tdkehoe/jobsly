var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/jobsly');
var Jobsly = db.get('jobsly');

router.get('/jobsly/', function(req, res) { // INDEX
  Jobsly.find({}, function(err, jobs) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(jobs); // Tested, OK
  })
});

router.post('/jobsly/', function(req, res) { // CREATE
  Jobsly.insert(req.body, function(err, job) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(job) // Created, OK
  })
});

// router.get('/new', function(req, res) { // NEW
//   // no database access needed
// });

router.get('/jobsly/:id', function(req, res) { // SHOW
  Jobsly.findOne({_id: req.params.id}, function(err, job){
    if (err) {
      res.send(err);
    }
    res.status(200).json(job); // Tested, OK
  })
});

// router.get('/:id/edit', function(req, res) { // EDIT - not needed, identical to the SHOW route
//   Jobsly.findOne({_id: req.params.id}, function(err, job){
//     if (err) {
//       res.send(err);
//     }
//     res.status(200).json(job); // Tested, OK
//   })
// });

router.put('/jobsly/:id', function(req, res) { // UPDATE
  Jobsly.findAndModify({_id: req.params.id}, req.body, function(err, job){
    if (err) {
      throw err;
    }
    res.json(req.body); // Tested, OK
  })
});

router.delete('/jobsly/:id', function(req, res) { // DESTROY
  Jobsly.remove({_id: req.params.id}, function(err, job){
    if (err) {
      throw err;
    }
    res.status(204).json(job); // Tested, No Content
  })
})

module.exports = router;
