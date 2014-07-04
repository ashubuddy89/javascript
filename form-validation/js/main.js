var validateForm = function () {
  this.form = document.getElementById("form");
  this.validateInputFields = document.getElementsByClassName("validate");
  this.textarea = document.getElementById("aboutme");
  this.notification = document.getElementById("notification");
  this.aboutMaxLength = 50;
  this.blankFileds = [];
}

validateForm.prototype = {

  validateAllFields: function(){
    obj = this;
    obj.blankFileds = [];
      for(i = 0; i < obj.validateInputFields.length; i++){
        if(obj.validateInputFields[i].value.trim() == ''){
            obj.blankFileds.push(obj.validateInputFields[i].getAttribute("name"));
        }
      }
      if(obj.blankFileds.length > 0){
        alert(obj.blankFileds.join(", ") + " can't be empty");
        return false;
      }
      return true;
  },

  validateAboutmeLength: function(){
    if(this.textarea.value.trim().length < this.aboutMaxLength) {
      alert("Please enter atleast 50 characters to write about yourself.");
      this.textarea.focus();
      return false;
    }
    return true;
  },

  validateNotification: function(){
    if(!(this.notification.checked)){
        alert("Please click on checkbox to recieve notifications");
        this.notification.focus();
        return false;
    }
    return true;
  },

  submitForm: function(){
    var obj = this;
    obj.form.onsubmit = function(){
      if(obj.validateAllFields() & obj.validateAboutmeLength() & obj.validateNotification()) {
        return true;
      }
      else {
        return false;
      }
      // return (obj.validateAllFields() && obj.validateAboutmeLength() && obj.validateNotification());
    }
  }
}

window.onload = function () {
  var validate_form = new validateForm();
      validate_form.submitForm();
}