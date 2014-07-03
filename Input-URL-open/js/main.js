var openEnteredUrl = function (){
  this.url = '';
}

openEnteredUrl.prototype = {
  enteredUrl: function(){    
    var userInputURL = prompt("Please enter a URL"),
        errorMessage = "You can't leave the URL blank";
        this.url = userInputURL;

    do{
      if((this.url) == null || (this.url) == '' || (this.url.trim()).length < 1){
        alert(errorMessage);
        this.enteredUrl();
      }else{
        this.openUrlWindow();
      }
    }
    while(!this.url)
  },

  openUrlWindow: function(){
    var newURL = "http://" + this.url;
        window.open(newURL, "_blank", "height=450px, width=400px, location=0, titlebar=0,  menubar=0, scroll=0, status=0, toolbar=0");
  }
}

window.onload = function(){
  var open_entered_url = new openEnteredUrl();
  open_entered_url.enteredUrl();
}