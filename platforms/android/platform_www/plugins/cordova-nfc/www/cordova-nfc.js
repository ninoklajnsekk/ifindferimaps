cordova.define("cordova-nfc.CordovaNFC", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "CordovaNFC", "coolMethod", [arg0]);
};

});
