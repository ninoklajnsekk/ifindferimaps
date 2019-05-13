var GetMapsUri = "http://10.0.2.2:8000/maps/5cd56fbe117b1433ce312e59";
$(document).ready(function() {
  loadContact();
});

function loadContact() {
  $.ajax(GetMapsUri, {
    beforeSend: function(xhr) {
      console.log('Pred');
    },
    complete: function() {
      console.log('Po');
    },
    contentType: 'application/json',
    dataType: 'json',
    async: true,
    type: 'GET',
    crossDomain: true,
    error: function(xhr, ajaxOptions, thrownError) {
      //alert(xhr.status);
      //alert(xhr.responseText);
      console.log(xhr.status);
      console.log(thrownError);
    },
    success: function(data, status) {
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
      });
    }
  });
}