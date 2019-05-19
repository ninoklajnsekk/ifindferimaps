var Messages = {
    zaposleniH1:"Zaposleni",

};

function setEnglish(){
     Messages.zaposleniH1="Employees",
}

function languageChanged(){
$("#zaposleniH1").html(Messages.zaposleniH1);
}