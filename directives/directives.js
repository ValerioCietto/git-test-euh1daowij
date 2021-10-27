var app = angular.module("directives", []);

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

app.controller("directivesController", function($scope, $http){
    $http.get("http://localhost/test-project/directives/dummydata.js").then(
        function(response){
            $scope.users = response.data;
            console.log(response);
        },
        function(error){
            
        }
    );

   
});
