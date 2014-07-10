urlRegex = /^((https?|ftp):\/\/)?(www\.)?(([A-z0-9]+\.)*)([A-z0-9]+\.[A-z]{2,4})(\/(.)*)?$/

var Form = function (formElem, urlElem) {
  this.formElem = formElem;
  this.urlElem = urlElem;
}

Form.prototype.displayDomainSubdomain = function () {
  var urlValue = this.urlElem.value.trim();
  if (!urlValue.match(urlRegex)) {
    alert("Not a valid URL");
    return false;
  } else if (RegExp.$4) {
    alert("Domain Name is " + RegExp.$6 + "\n" + "Subdomain Name is " + RegExp.$4.replace(/\.$/, ''));
  } else {
    alert("Domain Name is " + RegExp.$6);
  }
}

Form.prototype.submitForm = function () {
  var _this = this;
  _this.formElem.onsubmit = function (event) {
    return _this.displayDomainSubdomain();
  }
}

window.onload = function () {
  this.formElem = document.getElementById("form");
  this.urlElem = document.getElementById("url");
  var validateForm = new Form(formElem, urlElem);
  validateForm.submitForm();
}