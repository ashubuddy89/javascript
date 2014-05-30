var checkUncheckAll = function(form_id){
  this.init(form_id);
}
checkUncheckAll.prototype = {
  init: function(form_id){
    this.checkUncheckform = document.getElementById(form_id);
  },

  check: function(value) { //method name
    for(var i=0; i < this.checkUncheckform.length; i++){
      this.checkUncheckform.elements[i].checked = value;
    }
  }, 

  bindEvent: function(form_object){
    document.getElementById("check-all").addEventListener("click", function() {
      form_object.check(true);
    })
    document.getElementById("check-none").addEventListener("click", function() {
      form_object.check(false);
    })   
  }
}

window.onload = function(){
  var check_uncheck_form = new checkUncheckAll("form");
  check_uncheck_form.bindEvent(check_uncheck_form);
}