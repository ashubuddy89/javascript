emailRegEx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]{2,}(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

var Form = function () {
  this.form = document.getElementById("form");
  this.email = document.getElementById("email");
  this.url = document.getElementById("home");
}

Form.prototype.validateFields = function(input, regex){
  if(!regex.test(input.value)){
    alert("Please Enter a valid " + input.name + " address.")
    input.focus();
    return false;
  }
  return true;
}

Form.prototype.submitForm = function(){
  var _this = this;
  _this.form.onsubmit = function(event){
    if(_this.validateFields(_this.email, emailRegEx) && _this.validateFields(_this.url, urlRegEx)){
      return true;
    }
    else {
      event.preventDefault();
    }
  }
}

window.onload = function () {
  var validateForm = new Form();
      validateForm.submitForm();
}