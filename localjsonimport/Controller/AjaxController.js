  var app = angular.module("ajaxApp", [])
        app.controller("ajaxCtrl", function ($scope, $http) {

            $scope.loadData = function () {
                $http.get("productData.json").then(function (response) {
                	//console.log(response.data.result.records)
                    $scope.items = response.data;                     
                });
            }
        });