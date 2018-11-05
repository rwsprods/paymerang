// Init app
var app = angular.module("myApp", []);

// HTML controller
app.controller("myCtrl", function($scope, $http) {


    // Initial load to tables
        $http({
            method: 'get', 
            url: '/JSON/Info.json'
        }).then(function (response) {
            $scope.info = response.data[0];
        },function (error){
            console.log(error, 'can not get data.');
        });
        
    // Scope update functions to tables and respective JSON objects

        $scope.bleendot = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[0];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.farmage = function () {
           // Load JSON data to $scope
           $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[1];    
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.digirang = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[2];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.earthmark = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[3];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.datagen = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[4];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.twiggery = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[5];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.zolar = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[6];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.illumity = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[7];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.mazuda = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[8];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.zensure = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[9];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.buzzmaker = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[10];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

        $scope.kangle = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[11];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

         $scope.miraclis = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[12];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

         $scope.sportan = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[13];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

         $scope.manufact = function () {
        // Load JSON data to $scope
            $http({
                method: 'get', 
                url: '/JSON/Info.json'
            }).then(function (response) {
                $scope.info = response.data[14];
            },function (error){
                console.log(error, 'can not get data.');
            });
        }

});

