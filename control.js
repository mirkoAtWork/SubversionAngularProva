var app = angular.module('app', []);

app.controller("firstCtrl", function ($scope) {
$scope.$on('eventName', function (event, args) {
$scope.message = args.message;
console.log($scope.message);
});
});

app.controller("secondCtrl", function ($scope) {
$scope.handleClick = function (msg) {
$scope.$emit('eventName', { message: msg });
};
});


 app.controller("thirdCtrl", function ($scope) {
 $scope.handleClick = function (msg) {
 $scope.$broadcast('eventName', { message: msg });
 };

 });

 app.controller("fourthCtrl", function ($scope) {
 $scope.$on('eventName', function (event, args) {
 $scope.message = args.message;
 console.log($scope.message);
 });
 });
