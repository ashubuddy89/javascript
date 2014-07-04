var UserName = function () {
  this.firstName = "";
  this.lastName = "";
}

UserName.prototype.init = function () {
  this.firstName = this.promptInput("First Name");
  this.lastName = this.promptInput("Last Name");
  this.show();
}


UserName.prototype.promptInput = function (userName) {
  var name = "";
  while (name == null || name.trim() == ''){
    name = prompt("Enter Your " + userName);
  }
  return name;
}

UserName.prototype.show = function () {
  alert("Hello " +  this.firstName + " " + this.lastName);
  document.getElementById("username").innerHTML = "Hello " + this.firstName + " " + this.lastName;
}

window.onload = function () {
  var inputResult = new UserName();
  inputResult.init();
}