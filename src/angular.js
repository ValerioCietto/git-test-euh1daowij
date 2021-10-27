
var app = angular.module("bankApp", []);

app.controller("balancesController", function($scope) {
	$scope.users = [
  	{"id":1,"name":"Valerio Cietto", "balance":1218},
    {"id":2,"name":"Marco Grimaldi", "balance":1600}
  ];
  $scope.submitted=true;
  $scope.addNew = function(user){
  
  	var balance_new = Math.floor((Math.random()*4000)+1000);
    $scope.users.push(user);
    
  }
  $scope.remove = function(user){
  	$scope.users.splice($scope.users.indexOf(user), 1);
  };
  $scope.edit = function(user){
  	$scope.current = user;
  };
  $scope.save = function(user){
    $scope.current = {};

  }
  $scope.current = {};
  
});