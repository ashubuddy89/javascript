var LimitSelectDays = function () {

  this.pageTitle = pageTitle;
  this.form = form; 
  this.maxDays = 3;
  this.unselectAll = unselectAll;
  this.checkBox = checkBox;
  this.storeSelectedDays = [];
}

LimitSelectDays.prototype = {

  setPageHeading: function () {
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },
  
  checkBoxBindEvent: function () {
    this.checkBoxBind();
    this.uncheckAllInputCheckBox();
  },

  checkBoxBind: function () {
    var obj = this;

    for (i = 0; i < obj.checkBox.length; i++) {

      this.checkBox[i].addEventListener('click', function () {
        if (this.checked) {
          obj.unselectAll.checked = false;
          obj.storeSelectedDays.push(this.value);
        } else if (!this.checked) {
          obj.storeSelectedDays.splice(obj.storeSelectedDays.indexOf(this.value), 1);
        }
        obj.checkMaxThree(obj, this);        
      })
    }
  },

  checkMaxThree: function(obj, elem){
    if (obj.storeSelectedDays.length > obj.maxDays) {
      obj.storeSelectedDays.pop();
      elem.checked = false;
      alert("you can't select more than 3 days. you have already selected " + obj.storeSelectedDays[0] + ", " + obj.storeSelectedDays[1] + " and " + obj.storeSelectedDays[2]);
    }
  },
  
  uncheckAllInputCheckBox: function () {
    var obj = this;
    obj.unselectAll.addEventListener('click', function () {
      for (i = 0; i < obj.checkBox.length; i++) {
        obj.checkBox[i].checked = false;
        obj.storeSelectedDays.splice(0, obj.checkBox.length);
      }
    })
  },

}

window.onload = function () {
  //declared variables
  pageTitle = document.title;
  form = document.getElementById("form");
  checkBox = document.getElementsByClassName("day");
  unselectAll = document.getElementById("none");

  var limit_select_days = new LimitSelectDays();
      //methods
      limit_select_days.setPageHeading();
      limit_select_days.checkBoxBindEvent();
}