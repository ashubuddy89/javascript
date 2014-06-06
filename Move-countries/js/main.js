var selectOption =  function(){
  this.init();
}

selectOption.prototype = {
  init: function(){
    this.leftBox = document.getElementById("left-multiple");
    this.rightBox = document.getElementById("right-multiple");
    this.bindEvent();
  },

  moveOption: function(movefrom, moveto){
   var positionArray = [];
   while (movefrom.selectedIndex >= 0){
    var moveObj = movefrom.options[movefrom.selectedIndex];
    moveto.appendChild(moveObj);
   }
  },

  bindEvent: function(){
    var self = this;

    document.getElementById("move").addEventListener('click', function(){
      self.moveOption(self.leftBox, self.rightBox);
    });

    document.getElementById("remove").addEventListener('click', function(){
      self.moveOption(self.rightBox, self.leftBox);
    });
  },
}

window.onload= function(){
  var SelectOption = new selectOption();
}