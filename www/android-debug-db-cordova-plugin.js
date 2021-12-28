var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'android-debug-db-cordova-plugin', 'coolMethod', [arg0]);
};
