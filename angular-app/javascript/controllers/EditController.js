app.controller('EditController', ['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {
  console.log("Edit controller.");
  $http.get('http://localhost:8080/api/jobsly/' + $routeParams.id + '/edit/').then(function(response) { //EDIT
    $scope.job = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });

  $scope.updateJob = function(job) {
    console.log("Updating job.");
    var job = {
      jobTitle: $scope.job.jobTitle,
      jobCompany: $scope.job.jobCompany,
      jobDescription: $scope.job.jobDescription,
      jobResponsibilities: $scope.job.jobResponsibilities,
      jobPictureURL: $scope.job.jobPictureURL,
      jobFilled: $scope.job.jobFilled,
      jobCreated: $scope.job.jobCreated
    }

    $http.put('http://localhost:8080/api/jobsly/' + $routeParams.id, job).then(function(response) { // UPDATE
      console.log("Job added.");
      $location.path( '/');
    }, function(response) {
      console.log("Invalid URL");
    });
  }

  $scope.deleteJob = function(job) { // DESTROY
    console.log("Deleting job.");
    $http.delete('http://localhost:8080/api/jobsly/' + job._id).then(function(response) {
      console.log("Job deleted.");
      $route.reload();
    }, function(response) {
      console.log("Failed to reload page.");
    });
  };
}]);
