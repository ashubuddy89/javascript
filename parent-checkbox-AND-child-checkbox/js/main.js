var listMenuItem = function () {
  this.setAttributes();
  this.init();
}

listMenuItem.prototype = {
  setAttributes: function () {
    this.pageTitle = document.title;
    this.form = document.getElementById("form");
    this.checkBox = document.getElementsByClassName("check-box");
  },

  init: function () {
    this.setPageHeading();
    this.checkBoxBindEvent();
  },

  checkBoxBindEvent: function () {
    this.showCheckboxList();
  },

  setPageHeading: function () {
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },

  showCheckboxList: function () {
    var obj = this;
    for (i = 0; i < obj.checkBox.length; i++) {
      this.checkBox[i].onclick = function () {
        thisElemVal = this.getAttribute("data-value");
        obj.showChildElemntBlock(this, "block" + thisElemVal);
        //scroll to view
        obj.scrollToList("parentblock" + thisElemVal);
      }
    }
  },

  showChildElemntBlock: function (thisElem, clildBlockId) {
    var obj = this;
    if (thisElem.checked) {
      document.getElementById(clildBlockId).style.display = "block";
      obj.setChildCheckBoxStatus(true);
    } else {
      document.getElementById(clildBlockId).style.display = "none";
      obj.setChildCheckBoxStatus(false);
    }
  },

  setChildCheckBoxStatus: function (status) {
    var slaveCheckbox = document.getElementById("block" + thisElemVal).querySelectorAll(".slave");
    for (i = 0; i < slaveCheckbox.length; i++) {
      slaveCheckbox[i].checked = status;
    }
  },

  scrollToList: function (scrollToList) {
    document.getElementById(scrollToList).scrollIntoView(true);
  }
}
window.onload = function () {
  var list_menu_item = new listMenuItem();
}