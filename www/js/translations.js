var storage = window.localStorage;


//storage.removeItem(lan) // Pass a key name to remove that key from storage.
function isLangStored(){
    if(storage.getItem("lang") == "en"){
        setEnglish();
    }
    else{
        setSlovene();
    }
}


var Messages = {
    zaposleniH1:"Zaposleni",
    homeH1:"FERI Zemljevidi",
    helpH1:"Pomoč",
    domov:"Domov",
    zaposleni:"Zaposleni",
    help:"Pomoč",
    searchTextField:"Išči",
};

function setEnglish(){
     Messages.zaposleniH1="Employees";
     Messages.domov="Home";
     Messages.zaposleni="Employees";
     Messages.homeH1="FERI Maps";
     Messages.help="Help";
     Messages.helpH1="Help";
     Messages.searchTextField="Search";
    storage.setItem("lang", "en");
     languageSet();
};

function setSlovene(){
     Messages.zaposleniH1="Zaposleni";
     Messages.domov="Domov";
     Messages.zaposleni="Zaposleni";
     Messages.homeH1="FERI Zemljevidi";
     Messages.help="Pomoč";
     Messages.helpH1="Pomoč"
     Messages.searchTextField="Išči";
     storage.setItem("lang", "slo");
     languageSet();
}

function languageSet(){
$("#zaposleniH1").html(Messages.zaposleniH1);
$("#domov").html(Messages.domov);
$("#zaposleni").html(Messages.zaposleni);
$("#homeH1").html(Messages.homeH1);
$("#help").html(Messages.help);
$("#helpH1").html(Messages.helpH1);
$("#searchTextField").html(Messages.searchTextField);
};

