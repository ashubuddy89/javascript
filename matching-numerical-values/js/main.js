numRegEx = /^([+-])?\d+(\.[\d]+)?$/;

var Form = function (formElem, numberElem, statusElem) {
  this.formElem = formElem;
  this.numberElem = numberElem;
  this.statusElem = statusElem;
}

Form.prototype.isNumeric = function () {
  var _this = this,
    userValue = _this.numberElem.value.trim();

  if (!numRegEx.test(userValue)) {
    alert("Please enter a numeric value!")
    _this.numberElem.focus();
    _this.statusElem.value = false;
    return false;
  } else {
    _this.statusElem.value = true;
  }
  return true;
}

Form.prototype.submitForm = function () {
  var _this = this;
  _this.formElem.onsubmit = function (event) {
    return _this.isNumeric();
  }
}

window.onload = function () {
  this.formElem = document.getElementById("form");
  this.numberElem = document.getElementById("number");
  this.statusElem = document.getElementById("status");
  var validateForm = new Form(formElem, numberElem, statusElem);
  validateForm.submitForm();
}