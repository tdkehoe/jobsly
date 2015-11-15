app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  console.log("Home controller. I'm home!");
  $http.get('http://localhost:8080/api/jobsly/jobsly/').then(function(response) { // INDEX
    $scope.jobs = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });
}]);
