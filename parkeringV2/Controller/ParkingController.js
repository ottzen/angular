var parkingApp = angular.module("parkingApp", []);

parkingApp.controller('ParkingCtrl', ['$scope', 'ParkingService', function($scope, ParkingService) {
    $scope.items = ParkingService.parkingData;
}]);	