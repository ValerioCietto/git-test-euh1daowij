var app = angular.module("httpApp", []);

app.controller("httpController", function($scope, $http){
    $http.get("http://localhost/test-project/http/dummydata.js").then(
        function(response){
            $scope.users = response.data;
            console.log(response);
        },
        function(error){
            
        }
    );
});