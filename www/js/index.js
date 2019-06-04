var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    navigator.splashscreen.show();
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    initializeNFC();
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

function initializeNFC(){
    
  nfc.addNdefListener (
      function (nfcEvent) {
          nfc_callback(nfcEvent)
      },
      function () { // success callback
          console.log('succesful nfc');
      },
      function (error) { // error callback
        console.log('unsuccesful nfc');
      }
  );
}



app.initialize();