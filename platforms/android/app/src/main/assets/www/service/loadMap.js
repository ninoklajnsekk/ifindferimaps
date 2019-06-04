//browser
// var GetMapsUri = "http://localhost:8000/maps/5cf3af7f5339ac5524b80e5a";
// var GetMapsUriEN = "http://localhost:8000/maps/5cf3af840a8f305a50cbd705";
//android
var GetMapsUri = "http://10.0.2.2:8000/maps/5ce3aa68d733861a7895f7a7";
var GetMapsUriEN = "http://10.0.2.2:8000/maps/5cebfde8ef6dfa24109e158f";

var mapMain;

var storage = window.localStorage;
$(document).ready(function () {
  loadMap();
});

function loadMap() {
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
        map = $('#mapplic').mapplic({
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
        showLocationOnLoad(map);
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
        var map = $('#mapplic').mapplic({
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
        showLocationOnLoad(map);
        mapMain = map;
      }
    });
  }
}

function showLocationOnLoad(map) {
  if ("locationId" in storage) {
    console.log('id lokacije ' + storage.getItem('locationId'));
    var self = map.data('mapplic');
    setTimeout(function () { self.showLocation(storage.getItem('locationId'), 1); }, 3000);
    setTimeout(function () { storage.removeItem('locationId'); }, 3000);
  }
}
