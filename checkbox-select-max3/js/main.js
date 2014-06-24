var CheckUncheckAll = function(){
  this.init();
}

CheckUncheckAll.prototype = {
  init: function(){
    this.checkUncheckform = document.getElementById("form");
    // console.log(this.checkUncheckform)
    this.maxDays = 3;
    this.none = document.getElementById("none");
    this.check = document.getElementsByClassName("day");
  },

  checkMax: function(element){
    var selectedArray = [];
    for(i=0; i <= this.checkUncheckform.length; i++){
      if(selectedArray <= this.maxDays){
        selectedArray.push(this.checkUncheckform.elements[i]);
      }
    }
  },

  checkBoxBindEvent: function(){
    var obj = this;
    var checkboxes = document.getElementsByClassName('check-box');
    document.getElementsByClassName('check-box').addEventListener("click", function(){
      alert("in")
    })
  }

}


window.onload = function() {
  var checked_object = new CheckUncheckAll("form");
}