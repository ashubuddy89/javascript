var checkAllorNone = function(form_id){
  this.pageTitle = document.title;
  this.form = document.getElementById(form_id);
}

checkAllorNone.prototype = {

  SetPageHeading: function(){
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },

  SetCheckboxStatus: function(value) { //method name
    for(var i=0; i < this.form.length; i++){
      this.form.elements[i].checked = value;
    }
  }, 

  bindEvents: function(){
    this.checkAllBoxes();
    this.unCheckAllBoxes();
  },

  checkAllBoxes: function(){
    var obj = this;
    document.getElementById("check-all").addEventListener("click", function() {
      obj.SetCheckboxStatus(true);
    });
  },

  unCheckAllBoxes: function(){
    var obj = this;
    document.getElementById("check-none").addEventListener("click", function() {
      obj.SetCheckboxStatus(false);
    });
  },
}

window.onload = function(){
  var checkall_or_none = new checkAllorNone("form");
  checkall_or_none.SetPageHeading();
  checkall_or_none.bindEvents();
}