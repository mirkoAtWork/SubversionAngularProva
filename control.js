angular.module("select",[])
.controller("elenchi",function($scope){
  this.liguria=["Imperia","Savona","Genova","La Spezia"];
  this.province=[
            {codice:"SP",nome:"La Spezia"},
            {codice:"GE",nome:"Genova"},
            {codice:"IM",nome:"Imperia"},
            {codice:"SV",nome:"Savona"}
          ];

// per avere un elemento selezionato ho messo la variabile del model
// gia settata a
  this.objCity=this.province[0];

//altro modo per settare la variabile di default

  this.regioni = [
        {codice:"",   nome:"Seleziona la citta",    regione:""},
        {codice: "RM", nome: "Roma", regione: "Lazio"},
        {codice: "LT", nome: "Latina", regione: "Lazio"},
        {codice: "MI", nome: "Milano", regione: "Lombardia"},
        {codice: "NA", nome: "Napoli", regione: "Campania"},
        {codice: "CO", nome: "Como", regione: "Lombardia"},
        {codice: "PA", nome:"Palermo", regione: "Sicilia"},
        {codice: "CA", nome: "Caserta", regione: "Campania"},
        {codice: "AV", nome: "Avellino", regione: "Campania"},
        {codice: "TP", nome:"Trapani", regione: "Sicilia"},
        {codice: "AG", nome:"Agrigento", regione: "Sicilia"}
        ];
    this.objRegionCity=this.regioni[0];

});
