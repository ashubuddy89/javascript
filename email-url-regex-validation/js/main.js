emailRegEx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]{2,}(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

var Form = function (formElem, email, url) {
  this.formElem = formElem;
  this.email = email;
  this.url = url;
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
  _this.formElem.onsubmit = function(event){
    if(_this.validateFields(_this.email, emailRegEx) && _this.validateFields(_this.url, urlRegEx)){
      return true;
    }
    else {
      event.preventDefault();
    }
  }
}

window.onload = function () {
  formElem = document.getElementById("form");
  email = document.getElementById("email");
  url = document.getElementById("home");

  var validateForm = new Form(formElem, email, url);
      validateForm.submitForm();
}