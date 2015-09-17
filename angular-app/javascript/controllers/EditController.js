app.controller('EditController', ['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {
  console.log("Edit controller.");
  // $http.get('http://localhost:8080/api/jobsly/' + $routeParams.id + '/edit/').then(function(response) { //EDIT
  $http.get('http://localhost:8080/api/jobsly/jobsly/' + $routeParams.id).then(function(response) { //EDIT
    $scope.job = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });

  $scope.updateJob = function(job) {
    console.log("Updating job.");
    jobFilledBoolean = ($scope.job.jobFilled == 'true'); // radio buttons return strings, this converts strings to Booleans
    console.log(jobFilledBoolean);
    var job = {
      jobTitle: $scope.job.jobTitle,
      jobCompany: $scope.job.jobCompany,
      jobDescription: $scope.job.jobDescription,
      jobResponsibilities: $scope.job.jobResponsibilities,
      jobPictureURL: $scope.job.jobPictureURL,
      jobFilled: jobFilledBoolean, // Boolean value
      jobCreated: $scope.job.jobCreated
    }
    console.log(job);
    $http.put('http://localhost:8080/api/jobsly/jobsly/' + $routeParams.id, job).then(function(response) { // UPDATE
      console.log("Job added.");
      $location.path( '/jobsly/');
    }, function(response) {
      console.log("Invalid URL");
    });
  }

  $scope.deleteJob = function(job) { // DESTROY
    console.log("Deleting job.");
    $http.delete('http://localhost:8080/api/jobsly/jobsly/' + job._id).then(function(response) {
      console.log("Job deleted.");
      $route.reload();
    }, function(response) {
      console.log("Failed to reload page.");
    });
  };
}]);
