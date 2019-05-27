//Android
//var GetMapsUri = "http://10.0.2.2:8000/maps/5ce3aa68d733861a7895f7a7";
var GetMapsUri = "http://localhost:8000/maps/5ce3aa68d733861a7895f7a7";
//var GetMapsUri = "http://192.168.0.13:8000/maps/5ce18f8644a71211dcd4ddd8";

var storage = window.localStorage;

$(document).ready(function () {
  loadMap();
});

function loadMap() {
  if (storage.getItem("lang") == "en") {
    console.log('en');
  }
  else if (storage.getItem("lang") == "sl") {
    console.log('sl');
  }
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
    }
  });
}