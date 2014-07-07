var Form = function () {
  this.form = document.getElementById("form");
  this.status = document.getElementById("status");
  this.number = document.getElementById("number");
  this.numRegEx = /^([+]|[-])?\d+(\.[\d]+)?$/;
}

Form.prototype.isNumeric = function(){
  var obj = this,
      status = '',
      userValue = obj.number.value.trim();

  if(!obj.numRegEx.test(userValue)){
    alert("Please enter a numeric value!")
    obj.number.focus();
    obj.status.value = false;
    status = false;
  }else{
    status = true;
  }
  return status;
}

Form.prototype.submitForm = function(){
  var obj = this;
  obj.form.onsubmit = function(){
    return obj.isNumeric();
  }
}

window.onload = function () {
  var validateForm = new Form();
      validateForm.submitForm();
}