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
   while (movefrom.selectedIndex >= 0){
    var moveObj = movefrom.options[movefrom.selectedIndex];
        moveto.add(moveObj);
   }
  },


  revertOption: function(movefrom, moveto){
   var moveToLenght = moveto.options.length;
   var revertObj = movefrom.options[movefrom.selectedIndex];
   var revertPosition = revertObj.getAttribute("data-position");
    //var i = 0;
    moveto.add(revertObj, revertPosition);

    // for(; i < moveToLenght; i++){
    //   var revertObj = movefrom.options[movefrom.selectedIndex];
    //   var position = moveto.options[i].getAttribute("data-position");
    //   var revertPosition = revertObj.getAttribute("data-position");
    //   if(position > revertPosition){
    //     moveto.add(revertObj, i);
    //     break;
    //   }
    // }

    // if(i == moveToLenght) {
    //   moveto.add(revertObj, -1);
    // }

  },

  bindEvent: function(){
    var self = this;

    document.getElementById("move").addEventListener('click', function(){
      self.moveOption(self.leftBox, self.rightBox);
    });

    document.getElementById("revert").addEventListener('click', function(){
      self.revertOption(self.rightBox, self.leftBox);
    });
  },
}

window.onload= function(){
  var SelectOption = new selectOption();
}