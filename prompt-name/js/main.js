var userInput = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

userInput.prototype = {
  
  init: function (firstName, lastName) {
    this.firstName = this.userPromptInput(this.firstName);
    this.lastName = this.userPromptInput(this.lastName);
    
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
    document.getElementById("username").innerHTML = "Hello" + " " + this.firstName + " " + this.lastName
  }
}

window.onload = function () {
  var user_input = new userInput("First Name", "Last Name");
  user_input.init();
}