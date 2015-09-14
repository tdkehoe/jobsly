app.controller('ApplyController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  $scope.message="Connected!";
  console.log("Apply controller");
  $http.get('http://localhost:8080/api/jobsly/' + $routeParams.id).then(function(response) { // SHOW
    $scope.job = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });
}]);
