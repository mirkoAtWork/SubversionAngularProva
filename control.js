angular.module("AppRipassoDelMartedi",[])
  .controller("anagrafica",function(){
  this.nome="mirko";
  })
  .controller("saluti",function(){
    this.saluta=function(anagr){
      return "Ciao a te, utente"+" "+ (anagr.nome || "Ospite");
      }
  });
