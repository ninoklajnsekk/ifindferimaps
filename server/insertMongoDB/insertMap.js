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
        "id": "Dvigalo",
        "title": "Dvigalo",
        "about": "Dvigalo",
        "color": "#fb8c00",
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
        "title": "G2 pritličje",
        "map": "maps/map0.svg",
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
            "id": "nadstopje0_x5F_5",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.323",
            "y": "0.501"
          },
          {
            "id": "nadstopje0_x5F_4",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.758",
            "y": "0.778"
          },
          {
            "id": "nadstopje0_x5F_3",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.249",
            "y": "0.769"
          },
          {
            "id": "nadstopje0_x5F_2",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.251",
            "y": "0.338"
          },
          {
            "id": "nadstopje0_x5F_1",
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
          },
          {
            "id": "LiftN-0",
            "title": "Dvigalo",
            "pin": "hidden",
            "category": "Dvigalo",
            "x": "0.259",
            "y": "0.685"
          },
          {
            "id": "LiftS2-0",
            "title": "Dvigalo",
            "pin": "hidden",
            "category": "Dvigalo",
            "x": "0.850",
            "y": "0.835"
          },
          {
            "id": "LiftS1-0",
            "title": "Dvigalo",
            "pin": "hidden",
            "category": "Dvigalo",
            "x": "0.881",
            "y": "0.826"
          }
        ]
      },
      {
        "id": "G2_1_nadstropje",
        "title": "G2 1 nadstropje",
        "map": "maps/map1.svg",
        "locations": [{
            "id": "nadstopje1_x5F_5",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.323",
            "y": "0.501"
          },
          {
            "id": "nadstopje1_x5F_4",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.758",
            "y": "0.778"
          },
          {
            "id": "nadstopje1_x5F_3",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.249",
            "y": "0.769"
          },
          {
            "id": "nadstopje1_x5F_2",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.251",
            "y": "0.338"
          },
          {
            "id": "nadstopje1_x5F_1",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.752",
            "y": "0.326"
          },
          {
            "id": "LiftN-1",
            "title": "Dvigalo",
            "pin": "hidden",
            "category": "Dvigalo",
            "x": "0.259",
            "y": "0.685"
          },
          {
            "id": "LiftS2-1",
            "title": "Dvigalo",
            "pin": "hidden",
            "category": "Dvigalo",
            "x": "0.850",
            "y": "0.835"
          },
          {
            "id": "LiftS1-1",
            "title": "Dvigalo",
            "pin": "hidden",
            "category": "Dvigalo",
            "x": "0.881",
            "y": "0.826"
          },
          {
            "id": "Žensko_stranišče",
            "title": "Žensko stranišče",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.252",
            "y": "0.156"
          },
          {
            "id": "Moško_stranišče",
            "title": "Moško stranišče",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.303",
            "y": "0.171"
          },
          {
            "id": "Ohm",
            "title": "Ohm",
            "pin": "hidden",
            "category": "Laboratorij",
            "x": "0.878",
            "y": "0.232"
          },
          {
            "id": "Newton",
            "title": "Newton",
            "pin": "hidden",
            "category": "Laboratorij",
            "x": "0.650",
            "y": "0.805"
          },
          {
            "id": "Pascal",
            "title": "Pascal",
            "pin": "hidden",
            "category": "Laboratorij",
            "x": "0.501",
            "y": "0.802"
          },
          {
            "id": "Amprer",
            "title": "Amprer",
            "pin": "hidden",
            "category": "Predavalnica",
            "x": "0.364",
            "y": "0.800"
          },
          {
            "id": "_x31_N08",
            "title": "N08",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.348",
            "y": "0.173"
          },
          {
            "id": "_x31_N09",
            "title": "N09",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.393",
            "y": "0.173"
          },
          {
            "id": "_x31_N10",
            "title": "N10",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.435",
            "y": "0.173"
          },
          {
            "id": "_x31_N11",
            "title": "N11",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.481",
            "y": "0.173"
          },
          {
            "id": "_x31_N12",
            "title": "N12",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.526",
            "y": "0.173"
          },
          {
            "id": "_x31_N13",
            "title": "N13",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.585",
            "y": "0.173"
          },
          {
            "id": "Moško_stranišče_zaposleni",
            "title": "Moško stranišče zaposleni",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.694",
            "y": "0.154"
          },
          {
            "id": "Žensko_stranišče_zaposleni",
            "title": "Žensko stranišče zaposleni",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.758",
            "y": "0.178"
          },
          {
            "id": "Stranišče_za_invalide",
            "title": "Stranišče za invalide",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.758",
            "y": "0.225"
          },
          {
            "id": "_x31_N01",
            "title": "N01",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.304",
            "y": "0.369"
          },
          {
            "id": "_x31_N02",
            "title": "N02",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.345",
            "y": "0.369"
          },
          {
            "id": "_x31_N03",
            "title": "N03",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.391",
            "y": "0.369"
          },
          {
            "id": "_x31_N04",
            "title": "N04",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.440",
            "y": "0.369"
          },
          {
            "id": "_x31_N05",
            "title": "N05",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.481",
            "y": "0.369"
          },
          {
            "id": "_x31_N06",
            "title": "N06",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.526",
            "y": "0.369"
          },
          {
            "id": "_x31_N07",
            "title": "N07",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.572",
            "y": "0.369"
          },
          {
            "id": "_x31_N08_1_",
            "title": "N08",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.618",
            "y": "0.369"
          },
          {
            "id": "Seminarska_soba",
            "title": "Seminarska soba",
            "pin": "hidden",
            "category": "Predavalnica",
            "x": "0.677",
            "y": "0.369"
          }
        ]
      },
      {
        "id": "G2_4_nadstropje",
        "title": "G2 4 nadstropje",
        "map": "maps/map4.svg",
        "locations": [{
            "id": "nadstopje4_x5F_2",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.251",
            "y": "0.338"
          },
          {
            "id": "nadstopje4_x5F_1",
            "title": "Stopnišče",
            "pin": "hidden",
            "category": "Stopnišče",
            "x": "0.752",
            "y": "0.326"
          },
          {
            "id": "Žensko_stranišče",
            "title": "Žensko stranišče",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.252",
            "y": "0.156"
          },
          {
            "id": "Moško_stranišče",
            "title": "Moško stranišče",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.303",
            "y": "0.171"
          },
          {
            "id": "Galerija",
            "title": "Galerija",
            "pin": "hidden",
            "category": "Predavalnica",
            "x": "0.878",
            "y": "0.232"
          },
          {
            "id": "_x34_N61",
            "title": "N61",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.348",
            "y": "0.173"
          },
          {
            "id": "_x34_N62",
            "title": "N062",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.393",
            "y": "0.173"
          },
          {
            "id": "_x34_N63",
            "title": "N63",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.435",
            "y": "0.173"
          },
          {
            "id": "_x34_N64",
            "title": "N64",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.481",
            "y": "0.173"
          },
          {
            "id": "_x34_N65",
            "title": "N65",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.526",
            "y": "0.173"
          },
          {
            "id": "_x34_N66",
            "title": "N66",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.585",
            "y": "0.173"
          },
          {
            "id": "Moško_stranišče_zaposleni",
            "title": "Moško stranišče zaposleni",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.694",
            "y": "0.154"
          },
          {
            "id": "Žensko_stranišče_zaposleni",
            "title": "Žensko stranišče zaposleni",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.758",
            "y": "0.178"
          },
          {
            "id": "Stranišče_za_invalide",
            "title": "Stranišče za invalide",
            "pin": "hidden",
            "category": "Stranišče",
            "x": "0.758",
            "y": "0.225"
          },
          {
            "id": "_x34_N54",
            "title": "N54",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.304",
            "y": "0.369"
          },
          {
            "id": "_x34_N55",
            "title": "N55",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.345",
            "y": "0.369"
          },
          {
            "id": "_x34_N56",
            "title": "N56",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.391",
            "y": "0.369"
          },
          {
            "id": "_x34_N57",
            "title": "N57",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.440",
            "y": "0.369"
          },
          {
            "id": "_x34_N58",
            "title": "N58",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.481",
            "y": "0.369"
          },
          {
            "id": "_x34_N59",
            "title": "N59",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.526",
            "y": "0.369"
          },
          {
            "id": "_x34_N60",
            "title": "N60",
            "pin": "hidden",
            "category": "Kabinet",
            "x": "0.572",
            "y": "0.369"
          }
        ]
      }
    ]
  }];
  maps.forEach(function(map) {
    dbo.collection("maps").insertOne(map, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});