var storage = window.localStorage;

//storage.removeItem(lan) // Pass a key name to remove that key from storage.
function isLangStored() {
    if (storage.getItem("lang") == "en") {
        setEnglish();
    }
    else {
        setSlovene();
    }
}

var Messages = {
    zaposleniH1: "Zaposleni",
    homeH1: "FERI Zemljevidi",
    helpH1: "Pomoč",
    domov: "Domov",
    zaposleni: "Zaposleni",
    help: "Pomoč",
    searchTextField: "Išči",
    first: "Na napravi vklopite NFC.",
    second:"Napravo približajte NFC oddajniku.",
    third:"Aplikacija bo vašo lokacijo prikazala na mapi.",
    helpTitle:"Pomoč",
};

function setEnglish() {
    Messages.zaposleniH1 = "Employees";
    Messages.domov = "Home";
    Messages.zaposleni = "Employees";
    Messages.homeH1 = "FERI Maps";
    Messages.help = "Help";
    Messages.helpH1 = "Help";
    Messages.searchTextField = "Search";
    Messages.first = "Turn on NFC on your device.";
    Messages.second = "Hold your device near NFC chip.";
    Messages.third = "App will show your location on the map.";
    Messages.helpTitle = "Help with NFC";
    storage.setItem("lang", "en");
    loadMap();
    languageSet();
};

function setSlovene() {
    Messages.zaposleniH1 = "Zaposleni";
    Messages.domov = "Domov";
    Messages.zaposleni = "Zaposleni";
    Messages.homeH1 = "FERI Zemljevidi";
    Messages.help = "Pomoč";
    Messages.helpH1 = "Pomoč"
    Messages.searchTextField = "Išči";
    Messages.first = "Na napravi vklopite NFC.";
    Messages.second = "Napravo približajte NFC oddajniku.";
    Messages.third = "Aplikacija bo vašo lokacijo prikazala na mapi.";
    storage.setItem("lang", "slo");
    loadMap();
    languageSet();
}

function languageSet() {
    $("#zaposleniH1").html(Messages.zaposleniH1);
    $("#domov").html(Messages.domov);
    $("#zaposleni").html(Messages.zaposleni);
    $("#homeH1").html(Messages.homeH1);
    $("#help").html(Messages.help);
    $("#helpH1").html(Messages.helpH1);
    $("#searchTextField").html(Messages.searchTextField);
    $("first").html(Messages.first);
    $("second").html(Messages.second);
    $("third").html(Messages.third);
    $("helpTitle").html(Messages.helpTitle);
};

