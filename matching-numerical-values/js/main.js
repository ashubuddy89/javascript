numRegEx = /^([+-])?\d+(\.[\d]+)?$/;

var Form = function () {
  this.form = document.getElementById("form");
  this.status = document.getElementById("status");
  this.number = document.getElementById("number");
}

Form.prototype.isNumeric = function(){
  var _this = this,
      status = '',
      userValue = _this.number.value.trim();

  if(!numRegEx.test(userValue)){
    alert("Please enter a numeric value!")
    _this.number.focus();
    _this.status.value = false;
    status = false;
  } else {
    _this.status.value = true;
    status = true;
  }
  return status;
}

Form.prototype.submitForm = function(){
  var _this = this;
  _this.form.onsubmit = function(event){
    event.
    return _this.isNumeric();
  }
}

window.onload = function () {
  var validateForm = new Form();
      validateForm.submitForm();
}