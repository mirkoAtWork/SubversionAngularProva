angular.module("AppRipassoDelMartedi",[])
  .controller("anagrafica",function($scope){
  this.nome="mirko";
  $scope.salta="salta";

  })
  .controller("saluti",function(){
    this.saluta=function(anagr){
      return "Ciao a te, utente"+" "+ (anagr.nome || "Ospite");
      }

  });
