var app = angular.module("filterApp", []);
//jsonplaceholder.typicode.com/posts
app.controller("httpController", function($scope, $http){

    $http.get("http://jsonplaceholder.typicode.com/posts").then(
        function(response){
            $scope.posts = response.data;
            console.log(response);
        },
        function(error){  
        }
    );
    $scope.handleChange = function(posting_id){
        $http.get("http://jsonplaceholder.typicode.com/comments?postId=" + posting_id).then(
            function(response){
                $scope.comments = response.data;
                console.log(response);
            },
            function(error){  
            }
        );
        $scope.post_body = $scope.posts[posting_id].body;
        console.log("changed" + posting_id);
    }
   
});