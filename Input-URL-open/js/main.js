var Url = function (){
  this.url = '';
}

Url.prototype.validateAndOpenInWindow = function(){    
  this.input();
  var errorMessage = "You can't leave the URL blank";

  while (this.url == null || this.url.trim().length < 1) {
      alert(errorMessage);
      this.input();
  }
      this.openWindow();
}

Url.prototype.input = function(){
  this.url = prompt("Please enter a URL");
}

Url.prototype.openWindow = function(){
  var newURL = "http://" + this.url;
  window.open(newURL, "_blank", "height=450px, width=400px, location=0, titlebar=0,  menubar=0, scroll=0, status=0, toolbar=0");
}

window.onload = function(){
  var resultUrl = new Url();
  resultUrl.validateAndOpenInWindow();
}