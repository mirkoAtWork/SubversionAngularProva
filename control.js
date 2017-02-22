angular.module("mercolediApp",[])
.controller("tabella",function(){
  this.elenco=["primo","secondo","secondo","terzo"];
  this.elencodup=[53,27,27,27,32,53,1];
  this.rubrica=[
              {nome:"mirko",indirizzo:"via le dita dal naso",tel:"60610106"},
              {nome:"mirko",indirizzo:"via le dita dal naso",tel:"60610106"},
              {nome:"Davide",indirizzo:"casa sua",tel:"123456"},
              {nome:"un nome",indirizzo:"un indirizzo",tel:"un numero di telefono"}
            ];
});
