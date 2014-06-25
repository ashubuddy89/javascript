var LimitSelectDays = function(){
  this.setAttributes();
  this.init();
}

LimitSelectDays.prototype = {
  setAttributes: function() {
    this.pageTitle = document.title;
    this.form = document.getElementById("form");
    this.maxDays = 3;
    this.none = document.getElementById("none");
    this.checkBox = document.getElementsByClassName("day");
    this.storeSelectedDays = [];
  },

  init: function(){
    this.setPageHeading();
    this.checkBoxBindEvent();
  },

  checkBoxBindEvent: function(){
    this.checkMaxThreeInputCheckBox();
    this.uncheckAllInputCheckBox();
  },

  setPageHeading: function(){
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },

  checkMaxThreeInputCheckBox: function(){
    var obj = this;

    for(i=0; i < obj.checkBox.length; i++){
      this.checkBox[i].onclick = function(){
        if(this.checked){
          obj.none.checked = false;
          obj.storeSelectedDays.push(this.value);
        }
        else if(!this.checked){
          obj.storeSelectedDays.splice(obj.storeSelectedDays.indexOf(this.value), 1);
        } 

        if(obj.storeSelectedDays.length > obj.maxDays){
            obj.storeSelectedDays.pop();
            this.checked = false;
            alert("you can't select more than 3 days. you have already selected " + obj.storeSelectedDays[0] + ", " + obj.storeSelectedDays[1] + " and " + obj.storeSelectedDays[2]);
        }
      }
    }
  },

  uncheckAllInputCheckBox: function(){
    var obj = this;
    obj.none.onclick = function(){
      for(i=0; i < obj.checkBox.length; i++){
        obj.checkBox[i].checked = false;
        obj.storeSelectedDays.splice(0,obj.checkBox.length);
        console.log(obj.storeSelectedDays)
      }
    }
  },

}

window.onload = function() {
  var limit_select_days = new LimitSelectDays();
}
