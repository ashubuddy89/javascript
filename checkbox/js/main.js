var checkAllorNone = function(form_id){
  this.init(form_id);
}
checkAllorNone.prototype = {

  init: function(form_id){
    this.pageTitle = document.title;
    this.checkUncheckform = document.getElementById(form_id);
    this.classname = document.getElementsByClassName("check-status");

    this.SetPageHeading();
  },

  SetPageHeading: function(){
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },

  SetCheckboxStatus: function(value) { //method name
    for(var i=0; i < this.checkUncheckform.length; i++){
      this.checkUncheckform.elements[i].checked = value;
    }
  }, 

  bindClickEvent: function(){
    var obj = this;
    for(i = 0; i < obj.classname.length; i++){
      obj.classname[i].addEventListener("click", function(){
        var thisValue = this.getAttribute("data-status");
        obj.SetCheckboxStatus(thisValue == "check");
      })
    }
  }
}

window.onload = function(){
  var checkall_or_none = new checkAllorNone("form");
  checkall_or_none.bindClickEvent();
}