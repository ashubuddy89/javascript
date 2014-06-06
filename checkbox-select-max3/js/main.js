var CheckUncheckAll = function(form_id){
  this.init(form_id);
}

CheckUncheckAll.prototype = {
  init: function(form_id){
    this.checkUncheckform = document.getElementById(form_id);
    // console.log(this.checkUncheckform)
    this.maxDays = 3;
    this.none = document.getElementById("none");
    this.check = document.getElementsByClassName("check-box");
  },

  countCheckedBoxes: function(element){
    var selectedArray = [];
   
    for(i=0; i < this.checkUncheckform.elements.length; i++){
      if(selectedArray.length <= this.maxDays){

        if (this.checkUncheckform.elements[i].checked) {
          selectedArray.push(this.checkUncheckform.elements[i]);
        }
      }
      else {
        alert("not more than 3")
        element.checked = false;
      }
    }
  }

}


window.onload = function() {
  var checked_object = new CheckUncheckAll("form");
  var checkboxes = document.getElementsByClassName('check-box');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
      checked_object.countCheckedBoxes(this);
    });
  }
}