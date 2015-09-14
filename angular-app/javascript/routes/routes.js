app.config(function($routeProvider) {

  $routeProvider
  .when('/', { // INDEX
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController'
  })
  .when('/new', { // NEW
    templateUrl: 'javascript/templates/new.html',
    controller: 'NewController'
  })
  .when('/:id/edit', { // EDIT
    templateUrl: 'javascript/templates/edit.html',
    controller: 'EditController'
  })
  .when('/:id', { // SHOW
    templateUrl: 'javascript/templates/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/' });
});
