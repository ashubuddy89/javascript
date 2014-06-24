var selectOption =  function(){
  this.init();
}

selectOption.prototype = {
  init: function(){
    this.pageTitle = document.title;
    this.leftBox = document.getElementById("left-multiple");
    this.rightBox = document.getElementById("right-multiple");

    this.SetPageHeading();
  },
  
  SetPageHeading: function(){
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },

  moveOption: function(leftToRight){
    var movefrom, moveto, self = this;

    if(leftToRight){
      movefrom = self.leftBox;
      moveto = self.rightBox;
    } else {
      movefrom = self.rightBox;
      moveto = self.leftBox;
    }

    while (movefrom.selectedIndex >= 0){
      var moveObj = movefrom.options[movefrom.selectedIndex];
      moveto.appendChild(moveObj);
    }
  },

  moveLefttoRight: function(){
    var obj = this;
    document.getElementById("move").addEventListener('click', function(){
      obj.moveOption(true);
    });
  }, 

  moveRightToLeft: function(){
    var obj = this;
    document.getElementById("remove").addEventListener('click', function(){
      obj.moveOption(false);
    });
  },
  
  bindEvent: function(){
    this.moveLefttoRight();
    this.moveRightToLeft();
  },
}

window.onload= function(){
  var SelectOption = new selectOption();
  SelectOption.bindEvent();
}