var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("iFindFeri");
  var maps = [{
    "mapwidth": "960",
    "mapheight": "600",
    "groups": [{
        "id": "Predavalnica",
        "title": "Predavalnica",
        "about": "Predavalnice",
        "color": "#80CBC4",
        "legend": "true",
        "toggle": "true",
        "switchoff": "true",
        "hide": "false"
      },
      {
        "id": "Kabinet",
        "title": "Kabinet",
        "about": "Kabineti",
        "color": "#81D4FA",
        "legend": "true",
        "toggle": "true",
        "switchoff": "true",
        "hide": "false"
      },
      {
        "id": "Laboratorij",
        "title": "Laboratorij",
        "about": "laboratoriji",
        "color": "#9FA8DA",
        "legend": "true",
        "toggle": "true",
        "switchoff": "true",
        "hide": "false"
      },
      {
        "id": "Stranišče",
        "title": "Stranišče",
        "about": "Stranišča",
        "color": "#A5D6A7",
        "legend": "true",
        "toggle": "true",
        "switchoff": "true",
        "hide": "false"
      },
      {
        "id": "Stopnišče",
        "title": "Stopnišče",
        "about": "Stopnišče",
        "color": "#7b1fa2",
        "legend": "true",
        "toggle": "true",
        "switchoff": "true",
        "hide": "false"
      },
      {
        "id": "Drugo",
        "title": "Drugo",
        "about": "ostalo",
        "color": "#E6EE9C",
        "legend": "true",
        "toggle": "true",
        "switchoff": "true",
        "hide": "false"
      }
    ],
    "levels": [{
      "id": "G2_pritlicje",
      "title": "G2_pritlicje",
      "map": "maps/1.svg",
      "locations": [{
          "id": "alfa",
          "title": "G2-P1-Alfa",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.13",
          "y": "0.26"
        },
        {
          "id": "beta",
          "title": "G2-P2-Beta",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.113",
          "y": "0.709"
        },
        {
          "id": "P-01",
          "title": "G2-P01",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.645",
          "y": "0.240"
        },
        {
          "id": "P-02",
          "title": "G2-P02",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.466",
          "y": "0.228"
        },
        {
          "id": "P-03",
          "title": "G2-P03",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.326",
          "y": "0.230"
        },
        {
          "id": "P-04",
          "title": "G2-P04",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.653",
          "y": "0.771"
        },
        {
          "id": "P-05",
          "title": "G2-P05",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.505",
          "y": "0.782"
        },
        {
          "id": "P-06",
          "title": "G2-P06",
          "pin": "hidden",
          "category": "Predavalnica",
          "x": "0.370",
          "y": "0.788"
        },
        {
          "id": "Referat",
          "title": "Referat",
          "pin": "hidden",
          "category": "Drugo",
          "x": "0.901",
          "y": "0.207"
        },
        {
          "id": "nadstropje0_x5F_5",
          "title": "Stopnišče",
          "pin": "hidden",
          "category": "Stopnišče",
          "x": "0.323",
          "y": "0.501"
        },
        {
          "id": "nadstropje0_x5F_4",
          "title": "Stopnišče",
          "pin": "hidden",
          "category": "Stopnišče",
          "x": "0.758",
          "y": "0.778"
        },
        {
          "id": "nadstropje0_x5F_3",
          "title": "Stopnišče",
          "pin": "hidden",
          "category": "Stopnišče",
          "x": "0.249",
          "y": "0.769"
        },
        {
          "id": "nadstropje0_x5F_2",
          "title": "Stopnišče",
          "pin": "hidden",
          "category": "Stopnišče",
          "x": "0.251",
          "y": "0.338"
        },
        {
          "id": "nadstropje0_x5F_1",
          "title": "Stopnišče",
          "pin": "hidden",
          "category": "Stopnišče",
          "x": "0.752",
          "y": "0.326"
        },
        {
          "id": "Oglasna_deska",
          "title": "Oglasna deska",
          "pin": "hidden",
          "category": "Drugo",
          "x": "0.760",
          "y": "0.470"
        }
      ]
    }]
  }];
  maps.forEach(function(map) {
    dbo.collection("maps").insertOne(map, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});