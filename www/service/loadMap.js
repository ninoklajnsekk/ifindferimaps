//browser
var GetMapsUri = "http://192.168.0.13:8000/maps/5ce2e12e05b4e72f600d7edd";
var GetMapsUriEN = "http://192.168.0.13:8000/maps/5ced98ea06afd547ac6ecba9";
//android
//var GetMapsUri = "http://10.0.2.2:8000/maps/5ce3aa68d733861a7895f7a7";
//var GetMapsUriEN = "http://10.0.2.2:8000/maps/5cebfde8ef6dfa24109e158f";

var mapsURL = [GetMapsUri, GetMapsUriEN];
var mapsLang = ['slo', 'en'];

var storage = window.localStorage;

var db;
var databaseName = 'feriMaps';
var databaseVersion = 1;

function initializeDB(){
  var openRequest = window.indexedDB.open(databaseName, databaseVersion);
openRequest.onerror = function (event) {
  console.log('cant open database');
    console.log(openRequest.errorCode);
};
openRequest.onsuccess = function(event){
    console.log('openRequest result je podatkovna baza')
    console.log(openRequest.result)
    db = openRequest.result
    checkLocalDatabase();
    loadMap();
}

openRequest.onupgradeneeded = function (event) {
  console.log('onupgradeneeded')
  var db = event.target.result;
  db.onerror = function () {
      console.log(db.errorCode);
  };
  console.log('database ' + db)
  var store = db.createObjectStore('maps', { keyPath: '_id' });

  store.createIndex('groups', 'groups', { unique: false });
  store.createIndex('levels', 'levels', { unique: false });
  store.createIndex('mapwidth', 'mapwidth', { unique: false });
  store.createIndex('maphight', 'maphight', { unique: false });
  store.createIndex('createdAt', 'createdAt', { unique: false });
  store.createIndex('lang', 'lang', { unique: false });


  store.transaction.oncomplete = function (event) {

      var mapsStore = db.transaction('maps', 'readwrite').objectStore('maps');
      maps.forEach(function (map) {
          mapsStore.add(map);
      });
  };
};
}

function addMaps(map){
  var transaction = db.transaction(['maps'],'readwrite')
  
  transaction.onerror = function(event){
      console.log('error adding map')
      console.log(event)
  };

  transaction.oncomplete = function(event)
  {
      console.log('map added to db');
  };

  var objectStore = transaction.objectStore('maps');

  var request = objectStore.add(
    {
      _id:map['_id'],
      createdAt:map['createdAt'],
      groups: map['groups'],
      lang: map['lang'],
      levels: map['levels'],
      mapwidth: map['mapwidth'],
      mapheight: map['mapheight']
    }
  )

}


function checkLocalDatabase(){

  for(let i=0;i<Object.keys(mapsURL).length;i++)
  {

    $.ajax((mapsURL[i]+'/created'), {
      beforeSend: function (xhr) {
        console.log('Pred');
      },
      complete: function () {
        console.log('Po');
      },
      contentType: 'application/json',
      dataType: 'json',
      async: true,
      type: 'GET',
      crossDomain: true,
      error: function (xhr, ajaxOptions, thrownError) {
        console.log('napaka');
      },
      success: function (data, status) {
        console.log('Retrieved createdAt checking with current localDB!');
        checkDateAndUpdate(data['createdAt'],i)
      }
    });
  }
}


function addOrReplaceMap(map)
{
  console.log('adding or replacing map')
  var transaction = db.transaction(['maps'],'readwrite')
  var objectStore = transaction.objectStore("maps");
  var request = objectStore.getAll();
  request.onsuccess = function(e){
    maps = request.result;
    for(let i=0;i<Object.keys(maps).length;i++)
    {
      if(maps[i]['lang'] === map['lang'])
      {
        var delRequest = objectStore.delete(maps[i]['_id']);
        delRequest.onsuccess = function(e){
          objectStore.add(map);
          console.log('map deleted and added');
        }
      }
    }
  }
}


function checkDateAndUpdate(datetime, language)
{

  console.log('pridobivanje map....')
  var transaction = db.transaction(['maps'],'readwrite')
  var objectStore = transaction.objectStore("maps");
  var request = objectStore.getAll();
  
  request.onerror = function(event) {
    console.log('pridobivanje localne mape error')
     console.log(event);
    };
    
    request.onsuccess = function(event) {
      var maps = request.result;
      let selectedMap = null;
      for(let i = 0;i < Object.keys(maps).length; i++)
      {
        if(maps[i]['lang'] === mapsLang[language])
        {
          if(maps[i]['createdAt'] === datetime){
            console.log('Latest version of the map already exists');
            return;
          }
          addOrReplaceMap(maps[i]);
          return;
        }
      }
      $.ajax(mapsURL[language], {
        beforeSend: function (xhr) {
          console.log('Pred');
        },
        complete: function () {
          console.log('Po');
        },
        contentType: 'application/json',
        dataType: 'json',
        async: true,
        type: 'GET',
        crossDomain: true,
        error: function (xhr, ajaxOptions, thrownError) {
          console.log('napaka');
          console.log(xhr.status);
          console.log(thrownError);
        },
        success: function (data, status) {
          var tempData = data;
          tempData['lang'] = mapsLang[language];
          let transaction = db.transaction(['maps'],'readwrite')
          let objectStore = transaction.objectStore("maps");
          let request = objectStore.add(tempData);
          request.onsuccess = function(e){
            console.log('saved successful')
            loadMap();
          }
        }
      });
    };

}



$(document).ready(function () {
  initializeDB();
  
});

function loadMap()
{
  if(db == undefined)
    initializeDB();
  else{
    console.log('loadmap.js');
    console.log(JSON.stringify(db.objectStoreNames));
    let transaction = db.transaction(['maps'],'readwrite')
    let objectStore = transaction.objectStore("maps");
    let request = objectStore.getAll();
    
    request.onerror = function(e){
      console.log('error loadmap');
      console.log(e);
    }

    request.onsuccess = function(e)
    {
      let maps = request.result;
      
      if(Object.keys(maps).length == 0){
        console.log('nic ni shranjeno');
        checkLocalDatabase();
        return;
      }
      
      console.log(JSON.stringify(maps));
      let data;
      for(let i=0;i<Object.keys(maps).length;i++)
      {
        console.log('selecting language')
        if(storage.getItem("lang") == maps[i]['lang']){
            console.log('language selected')
            data = maps[i];
        }
      }
      console.log(JSON.stringify(data));
      $('#mapplic').mapplic({
        source: data,
        height: 540,
        sidebar: true,
        lightbox: true,
        fillcolor: '#495360',
        closezoomout: true,
        minimap: false,
        thumbholder: true,
        fullscreen: true,
        maxscale: 1,
        landmark: null,
        developer: false,
        hidenofilter: true,
      });
    }
}
}


/*function loadMap() {
  console.log('load map')
  if (storage.getItem("lang") === "en") {
    console.log('en');
    $.ajax(GetMapsUriEN, {
      beforeSend: function (xhr) {
        console.log('Pred');
      },
      complete: function () {
        console.log('Po');
      },
      contentType: 'application/json',
      dataType: 'json',
      async: true,
      type: 'GET',
      crossDomain: true,
      error: function (xhr, ajaxOptions, thrownError) {
        console.log('napaka');
        console.log(xhr.status);
        console.log(thrownError);
      },
      success: function (data, status) {
        console.log('Rezultat iz baze');
        console.log(JSON.stringify(data));
        var tempData = data;
        tempData['lang'] = 'en';
        $('#mapplic').mapplic({
          source: data,
          height: 540,
          sidebar: true,
          lightbox: true,
          fillcolor: '#495360',
          closezoomout: true,
          minimap: false,
          thumbholder: true,
          fullscreen: true,
          maxscale: 1,
          landmark: null,
          developer: false,
          hidenofilter: true,
        });
      }
    });
  }
  else if (storage.getItem("lang") === "slo") {
    console.log('sl');
    $.ajax(GetMapsUri, {
      beforeSend: function (xhr) {
        console.log('Pred');
      },
      complete: function () {
        console.log('Po');
      },
      contentType: 'application/json',
      dataType: 'json',
      async: true,
      type: 'GET',
      crossDomain: true,
      error: function (xhr, ajaxOptions, thrownError) {
        console.log('napaka');
        console.log(xhr.status);
        console.log(thrownError);
      },
      success: function (data, status) {
        console.log('Rezultat iz baze');
        console.log(JSON.stringify(data));
        $('#mapplic').mapplic({
          source: data,
          height: 540,
          sidebar: true,
          lightbox: true,
          fillcolor: '#495360',
          closezoomout: true,
          minimap: false,
          thumbholder: true,
          fullscreen: true,
          maxscale: 1,
          landmark: null,
          developer: false,
          hidenofilter: true,
        });
      }
    });
  }
}*/