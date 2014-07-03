var userInput = function () {
  this.firstName = "";
  this.lastName = "";
}

userInput.prototype = {
  
  init: function () {
    this.firstName = this.userPromptInput("Your First Name");
    this.lastName = this.userPromptInput("Your Last Name");
    
    //alert and save user name
    this.showUserName();
  },

  userPromptInput: function (userName) {
    var name = "";
    while (name == null || name.trim() == ''){
      name = prompt("Enter Your " + userName);
    }
    return name.trim();
  },

  showUserName: function () {
    alert("Hello " +  this.firstName + " " + this.lastName);
    document.getElementById("username").innerHTML = "Hello " + this.firstName + " " + this.lastName;
  }
}

window.onload = function () {
  var user_input = new userInput();
  user_input.init();
}