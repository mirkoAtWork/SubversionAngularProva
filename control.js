angular.module("direttiva",[])
.controller("scopedirettiva",['$scope',function($scope){
$scope.ita={saluto:"Ciao utente",pres:"Mi chiamo"};
$scope.eng={saluto:"Hello",pres:"My name is"};
}]).directive("myGreeting",function(){
return{
  restrict:'E',
  scope:{
    l1:'=',
},
templateUrl:'template.html'
};
});
