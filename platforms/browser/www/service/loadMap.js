//browser
var GetMapsUri = "http://localhost:8000/maps/5ce3aa68d733861a7895f7a7";
var GetMapsUriEN = "http://localhost:8000/maps/5cebfde8ef6dfa24109e158f";
//android
// var GetMapsUri = "http://192.168.0.13:8000/maps/5ce2e12e05b4e72f600d7edd";
// var GetMapsUriEN = "http://192.168.0.13:8000/maps/5ced98ea06afd547ac6ecba9";

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
      }
    });
  }
}

function showLocationOnLoad(map) {
  console.log('id lokacije' + storage.getItem('locationId'));
  var self = map.data('mapplic');
  self.showLocation(storage.getItem('locationId'), 25);
  setTimeout(function () { storage.removeItem('locationId'); }, 3000);
}
