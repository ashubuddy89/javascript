var Form = function (formElem, requireElem, textareaElem, notifyElem) {
  this.formElem = formElem;
  this.requireElem = requireElem;
  this.textareaElem = textareaElem;
  this.notifyElem = notifyElem;
  this.aboutMaxLength = 50;
  this.blankFileds = [];
}

Form.prototype.validateAllFields = function () {
  var _this = this;
  _this.blankFileds = [];
  for (i = 0; i < _this.requireElem.length; i++) {
    if (_this.requireElem[i].value.trim() == '') {
      _this.blankFileds.push(_this.requireElem[i].getAttribute("name"));
    }
  }
  if (_this.blankFileds.length > 0) {
    alert(_this.blankFileds.join(", ") + " can't be empty");
    return false;
  }
  return true;
}

Form.prototype.validateAboutmeLength = function () {
  if (this.textareaElem.value.trim().length < this.aboutMaxLength) {
    alert("Please enter atleast 50 characters to write about yourself.");
    this.textareaElem.focus();
    return false;
  }
  return true;
}

Form.prototype.validateNotification = function () {
  if (!(this.notifyElem.checked)) {
    alert("Please click on checkbox to receive notifications");
    this.notifyElem.focus();
  }
  return true;
}

Form.prototype.submitForm = function () {
  var _this = this;
  _this.formElem.onsubmit = function (event) {
    if (_this.validateAllFields() & _this.validateAboutmeLength() & _this.validateNotification()) {
      return true;
    } else {
      event.preventDefault();
    }
  }
}

window.onload = function () {
  this.formElem = document.getElementById("form");
  this.requireElem = document.getElementsByClassName("require");
  this.textareaElem = document.getElementById("aboutme");
  this.notifyElem = document.getElementById("notification");
  var validateForm = new Form(formElem, requireElem, textareaElem, notifyElem);
  validateForm.submitForm();
}