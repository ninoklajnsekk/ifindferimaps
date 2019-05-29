var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("iFindFeri");
    var zaposleni = [{
        "ime": "Barbara",
        "priimek": "Ferbežer",
        "strokovni_naziv": "Associate",
        "email": "barbara.ferbezer@um.si",
        "telefon": "+386 (2) 22 07 006",
        "id_prostora": "Referat",
        "lang": "en"
    },
    {
        "ime": "Lidija",
        "priimek": "Kokol",
        "strokovni_naziv": "Associate",
        "email": "lidija.kokol@um.si",
        "telefon": "+386 (2) 22 07 011",
        "id_prostora": "Referat",
        "lang": "en"
    },
    {
        "ime": "Vladimira",
        "priimek": "Kožuh Ledinek ",
        "strokovni_naziv": "Associate",
        "email": "vladka.kozuh@um.si",
        "telefon": "+386 (2) 22 07 007",
        "id_prostora": "Referat",
        "lang": "en"
    },
    {
        "ime": "Leon",
        "priimek": "Bošnjak",
        "strokovni_naziv": "mag. inž. inf. in tehnol. kom.",
        "email": "leon.bosnjak@um.si",
        "telefon": "+386 (2) 22 07 187",
        "id_prostora": "1N11",
        "lang": "en"
    },
    {
        "ime": "Lucija",
        "priimek": "Brezočnik",
        "strokovni_naziv": "mag. inž. inf. in tehnol. kom.",
        "email": "lucija.brezocnik@um.si",
        "telefon": "+386 (2) 22 07 385",
        "id_prostora": "Newton",
        "lang": "en"
    },
    {
        "ime": "Iztok",
        "priimek": "Fister",
        "strokovni_naziv": "doc. dr.",
        "email": "iztok.fister1@um.si",
        "telefon": "+386 (2) 22 07 385",
        "id_prostora": "Newton",
        "lang": "en"
    },
    {
        "ime": "Mitja",
        "priimek": "Gradišnik",
        "strokovni_naziv": "mag. inž. inf. in tehnol. kom.",
        "email": "mitja.gradisnik@um.si",
        "telefon": "+386 (2) 22 07 296",
        "id_prostora": "1N14",
        "lang": "en"
    },
    {
        "ime": "Mitja",
        "priimek": "Gradišnik",
        "strokovni_naziv": "univ. dipl. inž. rač. in inf.",
        "email": "mitja.gradisnik@um.si",
        "telefon": "+386 (2) 22 07 296",
        "id_prostora": "1N14",
        "lang": "en"
    },
    {
        "ime": "Dominik",
        "priimek": "Gril",
        "strokovni_naziv": "univ. dipl. inž. rač. in inf.",
        "email": "dominik.gril1@um.si",
        "telefon": "",
        "id_prostora": "Ohm",
        "lang": "en"
    },
    {
        "ime": "Jozsef",
        "priimek": "Györkös",
        "strokovni_naziv": "univ. dipl. inž. rač. in inf.",
        "email": "jozsef.gyorkos@um.si",
        "telefon": "+386 (2) 22 07 351",
        "id_prostora": "1N03",
        "lang": "en"
    },
    {
        "ime": "Marjan",
        "priimek": "Heričko",
        "strokovni_naziv": "red. prof. dr.",
        "email": "marjan.hericko@um.si",
        "telefon": "+386 (2) 22 07 295",
        "id_prostora": "1N07",
        "lang": "en"
    },
    {
        "ime": "Jernej",
        "priimek": "Huber",
        "strokovni_naziv": "univ. dipl. inž. rač. in inf.",
        "email": "jernej.huber@um.si",
        "telefon": "+386 (2) 22 07 298",
        "id_prostora": "1N11",
        "lang": "en"
    },
    {
        "ime": "Jošt",
        "priimek": " Gregor",
        "strokovni_naziv": "asist. dr",
        "email": "	gregor.jost@um.si",
        "telefon": "+386 (2) 22 07 350",
        "id_prostora": "1N10",
        "lang": "en"
    },
    {
        "ime": "Sašo",
        "priimek": "Karakatič",
        "strokovni_naziv": "doc. dr.",
        "email": "saso.karakatic@um.si",
        "telefon": "	+386 (2) 22 07 357",
        "id_prostora": "1N13",
        "lang": "en"
    },
    {
        "ime": "Boštjan",
        "priimek": "Kežmah",
        "strokovni_naziv": "viš. pred. dr.",
        "email": "bostjan.kezmah@um.si",
        "telefon": "+386 (2) 22 07 422",
        "id_prostora": "1N08",
        "lang": "en"
    },
    {
        "ime": "Mateja",
        "priimek": "Kocbek Bule",
        "strokovni_naziv": "asist. mag. inž. inf. in tehnol. kom.",
        "email": "mateja.kocbek@um.si",
        "telefon": "+386 (2) 22 07 399",
        "id_prostora": "1N12",
        "lang": "en"
    },
    {
        "ime": "Katja",
        "priimek": "Kous",
        "strokovni_naziv": "asist. dr.",
        "email": "	katja.kous@um.si",
        "telefon": "+386 (2) 22 07 402",
        "id_prostora": "1N14",
        "lang": "en"
    },
    {
        "ime": "Saša",
        "priimek": "Kuhar",
        "strokovni_naziv": "asist. dr.",
        "email": "sasa.kuhar@um.si",
        "telefon": "+3876 (2) 22 07 360",
        "id_prostora": "1N12",
        "lang": "en"
    },
    {
        "ime": "Boris",
        "priimek": "Lahkovnik",
        "strokovni_naziv": "univ. dipl. inž. rač. in inf.",
        "email": "	boris.lahovnik@um.si",
        "telefon": "+386 (2) 22 07 359",
        "id_prostora": "Pascal",
        "lang": "en"
    },
    {
        "ime": "Boris",
        "priimek": "Macuh",
        "strokovni_naziv": "dipl. inž. el.",
        "email": "boris.macuh@um.si",
        "telefon": "+386 (2) 22 07 114",
        "id_prostora": "Ohm",
        "lang": "en"
    },
    {
        "ime": "Bojan",
        "priimek": "Novak",
        "strokovni_naziv": "viš. pred. dr.",
        "email": "bojan.novak@um.si",
        "telefon": "+386 (2) 22 07 367",
        "id_prostora": "1N01",
        "lang": "en"
    },
    {
        "ime": "Boris",
        "priimek": "Ovčjak",
        "strokovni_naziv": "asist",
        "email": "	boris.ovcjak@um.si",
        "telefon": "",
        "id_prostora": "1N08",
        "lang": "en"
    },
    {
        "ime": "Pavlič",
        "priimek": "Luka",
        "strokovni_naziv": "doc. dr. ",
        "email": "luka.pavlic@um.si",
        "telefon": "+386 (2) 22 07 356",
        "id_prostora": "1N12",
        "lang": "en"
    },
    {
        "ime": "Miha",
        "priimek": "Pavlinek",
        "strokovni_naziv": "asist. dr. ",
        "email": "miha.pavlinek@um.si",
        "telefon": "+386 (2) 220-7420",
        "id_prostora": "1N13",
        "lang": "en"
    },
    {
        "ime": "Blaž",
        "priimek": "Podgorelec",
        "strokovni_naziv": "dipl.inž.rač.in inf.tehnol.(UN)",
        "email": "blaz.podgorelec@um.si",
        "telefon": "+386 (2) 22 07 343",
        "id_prostora": "1N15",
        "lang": "en"
    },
    {
        "ime": "Gregor",
        "priimek": "Polančič",
        "strokovni_naziv": "izr.prof.dr.",
        "email": "	gregor.polancic@um.si",
        "telefon": "+386 (2) 22 07 421",
        "id_prostora": "1N02",
        "lang": "en"
    },
    {
        "ime": "Borut",
        "priimek": "Preložnik",
        "strokovni_naziv": "dipl. inž. el.",
        "email": "borut.preloznik@um.si",
        "telefon": "+386 (2) 22 07 115",
        "id_prostora": "1N16",
        "lang": "en"
    },
    {
        "ime": "Maja",
        "priimek": "Pušnik",
        "strokovni_naziv": "doc. dr.",
        "email": "maja.pusnik@um.si",
        "telefon": "+386 (2) 22 07 379",
        "id_prostora": "1N12",
        "lang": "en"
    },
    {
        "ime": "Alen",
        "priimek": "Rajšp",
        "strokovni_naziv": "asist.",
        "email": "alen.rajsp@um.si",
        "telefon": "+386 (2) 22 07 344",
        "id_prostora": "Pascal",
        "lang": "en"
    },
    {
        "ime": "Patrik",
        "priimek": "Rek",
        "strokovni_naziv": "dipl.inž.rač.in inf.tehnol.(UN)",
        "email": "patrik.rek@um.si",
        "telefon": "+386 (2) 22 07 425",
        "id_prostora": "1N15",
        "lang": "en"
    },
    {
        "ime": "Miha",
        "priimek": "Strehar",
        "strokovni_naziv": "",
        "email": "miha.strehar@um.si",
        "telefon": "+386 (2) 22 07 358",
        "id_prostora": "Newton",
        "lang": "en"
    },
    {
        "ime": "Matej",
        "priimek": "Šprogar",
        "strokovni_naziv": "doc. dr.",
        "email": "miha.strehar@um.si",
        "telefon": "+386 (2) 22 07 464",
        "id_prostora": "1N04",
        "lang": "en"
    },
    {
        "ime": "Matej",
        "priimek": "Šprogar",
        "strokovni_naziv": "doc. dr.",
        "email": "matej.sprogar@um.si",
        "telefon": "+386 (2) 22 07 464",
        "id_prostora": "1N04",
        "lang": "en"
    },
    {
        "ime": "Viktor",
        "priimek": "Taneski",
        "strokovni_naziv": "asist.",
        "email": "viktor.taneski@um.si",
        "telefon": "+386 (2) 220-7355",
        "id_prostora": "1N10",
        "lang": "en"
    },
    {
        "ime": "Muhamed",
        "priimek": "Turkanović ",
        "strokovni_naziv": "doc. dr.",
        "email": "muhamed.turkanovic@um.si",
        "telefon": "+386 (2) 22 07 351",
        "id_prostora": "1N03",
        "lang": "en"
    },
    {
        "ime": "Grega",
        "priimek": "Vrbančič",
        "strokovni_naziv": "mag. inž. inf. in tehnol. kom.",
        "email": "grega.vrbancic@um.si",
        "telefon": "+386 (2) 22 07 411",
        "id_prostora": "Newton",
        "lang": "en"
    }
    ];
    zaposleni.forEach(function (zaposlen) {
        dbo.collection("zaposlens").insertOne(zaposlen, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
});
