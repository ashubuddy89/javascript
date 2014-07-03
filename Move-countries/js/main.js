var moveSelectedOption =  function(){
  this.pageTitle  = pageTitle;
  this.movefrom = movefrom;
  this.moveto = moveto;
  this.selectBox = {'source': this.movefrom, 'destination': this.moveto};
}

moveSelectedOption.prototype = {
  
  SetPageHeading: function(){
    document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
  },

  moveOption: function(elem){
    var obj = this,
        source = obj.selectBox[elem.getAttribute("data-source")],
        destination= obj.selectBox[elem.getAttribute("data-destination")];
    
    while (source.selectedIndex >= 0){
      var moveObj = source.options[source.selectedIndex];
      destination.appendChild(moveObj);
    }
  },

  // moveOptionDynamic: function(elem){
  //   var obj = this,
  //     movefrom = document.getElementById(elem.getAttribute('data-source')),
  //     moveto = document.getElementById(elem.getAttribute('data-destination'));

  //   while (movefrom.selectedIndex >= 0){
  //     var moveObj = movefrom.options[movefrom.selectedIndex];
  //     moveto.appendChild(moveObj);
  //   }
  // },

  moveLefttoRight: function(){
    var obj = this;
    document.getElementById("move").addEventListener('click', function(e){
      obj.moveOption(this);
    });
  }, 

  moveRightToLeft: function(){
    var obj = this;
    document.getElementById("remove").addEventListener('click', function(e){
      obj.moveOption(this);
    });
  },
  
  bindEvent: function(){
    this.moveLefttoRight();
    this.moveRightToLeft();
  },
}

window.onload= function(){
  pageTitle = document.title;
  movefrom = document.getElementById("left-multiple");
  moveto = document.getElementById("right-multiple")

  var move_selected_option = new moveSelectedOption();

      move_selected_option.SetPageHeading();
      move_selected_option.bindEvent();
}