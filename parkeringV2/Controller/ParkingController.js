var parkingApp = angular.module("parkingApp", []);

parkingApp.controller('ParkingCtrl', function($scope, ParkingService) {
	$scope = ParkingService;
 });