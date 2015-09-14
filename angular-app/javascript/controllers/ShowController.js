app.controller('ShowController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  console.log("Show controller");
  $http.get('http://localhost:8080/api/jobsly/' + $routeParams.id).then(function(response) { // SHOW
    $scope.job = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });
}]);
