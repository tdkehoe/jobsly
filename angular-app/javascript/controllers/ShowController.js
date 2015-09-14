app.controller('ShowController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  console.log("Show controller");
  $http.get('http://localhost:8080/api/jobsly/' + $routeParams.id).then(function(response) { // SHOW
    $scope.job = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });

  $scope.addJobApplication = function(job) {
    console.log("Applying for job.");
    console.log(job);
    var application = {
      applicantName: job.application.applicantName,
      applicantEmail: job.application.applicantEmail,
      resumeURL: job.application.resumeURL
    };
    console.log(application);
    var applications = job.applications || [];
    console.log(applications);
    applications.push(application);
    job.application.applicantName = null;
    job.application.applicantEmail = null;
    job.application.resumeURL = null;
    job.applications = applications;
    $http.put('http://localhost:8080/api/jobsly/' + job._id, job).then(function(response) { // UPDATE
      console.log("Job application added.");
    }, function(response) {
      console.log("Invalid URL");
    });
  };

}]);
