var CheckAllBoxes = function(form_id){
  this.pageTitle = document.title;
  this.form = document.getElementById(form_id);
}

CheckAllBoxes.prototype = {

  SetPageHeading: function(){
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },

  SetCheckboxStatus: function(value) { //method name
    for(var i=0; i < this.form.length; i++){
      this.form.elements[i].checked = value;
    }
  }, 

  bindEvents: function(){
    this.checkAll();
    this.unCheckAll();
  },

  checkAll: function(){
    var obj = this;
    document.getElementById("check-all").addEventListener("click", function() {
      obj.SetCheckboxStatus(true);
    });
  },

  unCheckAll: function(){
    var obj = this;
    document.getElementById("check-none").addEventListener("click", function() {
      obj.SetCheckboxStatus(false);
    });
  },
}

window.onload = function(){
  var check_all_boxed = new CheckAllBoxes("form");
  check_all_boxed.SetPageHeading();
  check_all_boxed.bindEvents();
}