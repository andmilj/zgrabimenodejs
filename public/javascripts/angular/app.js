/**
 * Created by Andrej on 19.9.2014..
 */
var app=angular.module("zgrabime",["ngRoute"]);



app.config(function($routeProvider){

    $routeProvider.when("/",{
        controller:"homeController",
        templateUrl:"/ngTemplates/index.html",
        resolve: {
            data:["$q","$http",function($q, $http){
                var deferred=$q.defer();
                $http.get("/api/categories/").success(function(result){
                    console.log(result);
                    deferred.resolve(result);
                });
                return deferred.promise;
            }]
        }
    });

});

app.controller("homeController", ["$scope", function($scope, data){
    $scope.categories=data;

    console.log("nesto");
}]);

