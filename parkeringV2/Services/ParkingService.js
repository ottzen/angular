var parkingApp = angular.module("parkingApp", []);

parkingApp.service('ParkingService', function($http){
    $http.get("http://www.odaa.dk/api/action/datastore_search?resource_id=2a82a145-0195-4081-a13c-b0e587e9b89c").then(function (response) {
                	//console.log(response.data.result.records)
                    return response;                 
                });
 });
