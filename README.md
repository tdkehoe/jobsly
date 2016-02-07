# jobsly

Our final exam was to build this CRUD app in 7.5 hours. No cutting and pasting was allowed, we had to key in every character! Only half of us passed the exam on the first try; the other students had to retake the exam.

The requirements were to use MongoDB, Node, and Express. I was the only student who passed who also used Angular. I built two separate apps, the Express back end runs on Heroku and the Angular front end runs on Divshot. The apps talk to each other via an API.

The database has nested arrays of objects, i.e., the jobs are objects in an array of jobs, and each job has an array of job applications, each of which is an object.

By using Angular I was able to include many nice features, especially hiding and showing view elements depending on whether there are applicants for a job, if the job has been filled, etc. "Current Applicants" pluralizes if there is more than one applicant. The jobs are listed in reverse date order. The job application fields have validation for e-mail, website, etc.

I had fun making this app and had time to do some extra styling and add some fun jobs!

View the front end on Firebase:
https://jobsly-angular.firebaseapp.com/#/jobsly/
(Wait about thirty seconds for the data to arrive from Heroku.)

The back end is on Heroku at:
https://protected-plateau-2199.herokuapp.com/ https://git.heroku.com/protected-plateau-2199.git

I tested the back end with Postman, for example:
GET http://localhost:8080/api/jobsly

To run this app locally, go into the directory jobsly/express-app and run:
```
nodemon
mongod
```

Then go into the directory jobsly/angular-app and run:
```
http-server -c-1 -o
```

Open your browser to:
http://127.0.0.1:8081/#/jobsly/
