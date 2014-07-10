var dynamicTable = function (addRowBtn, table) {
  this.pageTitle = pageTitle;
  this.addRowBtn = addRowBtn
  this.table = table
}

dynamicTable.prototype.init = function () {
  this.appendRow();
}

dynamicTable.prototype.setPageHeading = function(){
  document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
}

dynamicTable.prototype.createButton = function (val, visible) {
  btn = document.createElement("input");
  btn.type = "button";
  btn.value = val;
  btn.className = val.toLowerCase();
  btn.style.display = visible ? 'inline' : "none";
  return btn;
}

dynamicTable.prototype.createCells = function () {
  var _this = this;
  var name = _this.createCell('name'),
      email = _this.createCell('email'),
      action = _this.createCell('action');
  return [name, email, action];
}

dynamicTable.prototype.createCell = function (cellType) {
  var _this = this;
  var cell = document.createElement("td");
  if (cellType == 'action') {
    buttons = [
              _this.createButton('Save', true),
              _this.createButton('Edit', false),
              _this.createButton('Delete', false)
            ];
    _this.appeadChildrenTo(cell, buttons);    
  }
  else {
    var input = document.createElement("input"),
        label = document.createElement("span");
    input.type = "text";      
    _this.appeadChildrenTo(cell, [input, label]);
  }
  return cell;
}

dynamicTable.prototype.addListenerSaveAction = function () {
  var _this = this,
      row = _this.table.rows[_this.table.rows.length - 1],
      save = row.getElementsByClassName("save")[0],
      edit = row.getElementsByClassName("edit")[0],
      del = row.getElementsByClassName("delete")[0],
      emailRegEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


  save.addEventListener("click", function () {
    var nameInputField = row.getElementsByTagName("input")[0],
        emailInputField = row.getElementsByTagName("input")[1],
        nameSpanField = row.getElementsByTagName("span")[0],
        emailSpanField = row.getElementsByTagName("span")[1],

        nameValue = nameInputField.value,
        emailValue = emailInputField.value;

    if (nameValue.trim() == "" || emailValue.trim() == "") {
      alert("Fields should not empty");
      return false;
    }
    else if(!emailRegEx.test(emailValue.trim())){
      alert("Please enter a valid email.");
      return false;
    }
    else {
      nameInputField.style.display = "none";
      emailInputField.style.display = "none";

      nameSpanField.style.display = "block";
      emailSpanField.style.display = "block";

      nameSpanField.innerHTML = nameValue;
      emailSpanField.innerHTML = emailValue;

      this.style.display = "none";
      edit.style.display = "inline";
      del.style.display = "inline"; 
    }
  });
}

dynamicTable.prototype.addListenerEditAction = function () {
  var _this = this,
      row = _this.table.rows[_this.table.rows.length - 1],
      save = row.getElementsByClassName("save")[0],
      edit = row.getElementsByClassName("edit")[0],
      del = row.getElementsByClassName("delete")[0];

  edit.addEventListener("click", function () {
    var nameInputField = row.getElementsByTagName("input")[0],
        emailInputField = row.getElementsByTagName("input")[1],
        nameSpanField = row.getElementsByTagName("span")[0],
        emailSpanField = row.getElementsByTagName("span")[1],

        nameValue = nameInputField.value,
        emailValue = emailInputField.value;

    nameInputField.style.display = "block";
    emailInputField.style.display = "block";

    nameSpanField.style.display = "none";
    emailSpanField.style.display = "none";

    this.style.display = "none";
    save.style.display = "inline";
    del.style.display = "none";
  });
}

dynamicTable.prototype.addListenerDeleteAction = function () {
  var _this = this,
      row = _this.table.rows[_this.table.rows.length - 1],
      del = row.getElementsByClassName("delete")[0];

  del.addEventListener("click", function () {
    row.remove();
  });
}

dynamicTable.prototype.createRow = function () {
  var _this = this,
      rowCount = _this.table.rows.length,
      row = _this.table.insertRow(rowCount++),
      cells = _this.createCells();
  _this.appeadChildrenTo(row, cells);
  _this.attachActionBtnListeners();
}

dynamicTable.prototype.appeadChildrenTo = function(row, cells) {
  cells.forEach(function(v, i) {
    row.appendChild(v);
  })
}

dynamicTable.prototype.attachActionBtnListeners = function () {
  var _this = this;
  _this.addListenerSaveAction();
  _this.addListenerEditAction();
  _this.addListenerDeleteAction();
}

dynamicTable.prototype.appendRow = function () {
  var _this = this,
      rowCount = _this.table.rows.length;
  _this.addRowBtn.addEventListener("click", function () {
    _this.createRow();
  });
}

window.onload = function () {
  pageTitle = document.title;
  addRowBtn = document.getElementById("add-row-btn");
  table = document.getElementById("table");
  var dynamic_table = new dynamicTable(addRowBtn, table);
  dynamic_table.setPageHeading();
  dynamic_table.init();
}