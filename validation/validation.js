var app = angular.module("validationAndBinding", []);

app.directive("ngCustomTest", function(){
    return {
        template : "hello I am a directive!"
    }
});
app.directive("ngCustomHover", function(){
    return {
        link : function(scope, element, attrs){
            var originalColor = element.css("color");
            element.on("mouseenter", function(){
                var selectedColor = element.attr("ng-custom-hover");
                element.css("color", selectedColor);
                console.log("enter");
            });
            element.on("mouseleave", function(){
                var selectedColor = element.attr("ng-custom-hover");
                element.css("color", originalColor);
                console.log("leave");
            });
        }
    }
});

app.controller("usersController", function($scope, $http){

    $http.get("http://jsonplaceholder.typicode.com/users").then(
        function(response){
            $scope.users = response.data;
            console.log(response);
        },
        function(error){  
        }
    );
    $scope.editedUser = {name:""}

    $scope.edit = function(u){
        $scope.currentUser = u;
        $scope.editedUser.name = u.name
    };

    $scope.save = function(edited){
        $scope.currentUser.name = edited.name;
        $scope.editedUser = {name:""}
    }
    
   
});