var http = require("http");
var platform = require("platform");
var nativePlatformLocalhost;
var view = require("ui/core/view");
/*in some function or globally*/
if(platform.device.os === platform.platformNames.ios){
  /*localhost for ios*/
  nativePlatformLocalhost= "localhost";
}
else if(platform.device.os === platform.platformNames.android){
  /*localhost for android*/
  nativePlatformLocalhost= "10.0.2.2";
}
exports.pageLoaded = function() {

};

exports.signIn = function () {
  // var req = {
  //   email: emailField.text,
  //   password: passwordField.text
  // };
  var req = {
    email: '123@abv.bg',
    password: '123456'
  };
  let fd = new FormData();
  fd.append('email', '123@abv.bg');
  fd.append('password', '123456');
  http.request({
    url: 'http://ezikpro.com/API/api.php',
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    content: fd
  }).then(function (response) {
    var result = response.content.toJSON();
    alert(result.message)
    result = result[0];
  }, function (error) {
    alert('kur')
      //alert(JSON.stringify(error))
  });
}
var emailField, passwordField;
function navigatingTo(args) {
    var page = args.object;
    emailField = view.getViewById(page, "email");
    passwordField = view.getViewById(page, "password");
    page.bindingContext = { email: '', password: '' };
}

exports.navigatingTo = navigatingTo;

exports.onTap = function () {
  http.getJSON("http://127.0.0.1:8888/api/api.php").then(function (data) {
      alert(textfield.text);
  }, function (e) {
      //// Argument (e) is Error!
      alert(e);
  });

};
