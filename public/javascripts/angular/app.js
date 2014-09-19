/**
 * Created by Andrej on 19.9.2014..
 */
var app=angular.module("zgrabime",["ngRoute"]);



app.config(function($routeProvider){

    $routeProvider.when("/",{
        controller:"homeController",
        templateUrl:"/ngTemplates/index.html"
    })

});

app.controller("homeController", ["$scope", function($scope){
    console.log("nesto");
}]);