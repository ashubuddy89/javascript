var DynamicTable = function (pageTitle, addRowBtn, table) {
  this.pageTitle = pageTitle;
  this.addRowBtn = addRowBtn;
  this.table = table;
}

DynamicTable.prototype.setPageHeading = function(){
  document.getElementById("page-title").innerHTML = "Exercise " + this.pageTitle;
}

DynamicTable.prototype.createButton = function (val) {
  btn = document.createElement("input");
  btn.type = "button";
  btn.value = val;
  btn.className = val.toLowerCase();
  return btn;
}

DynamicTable.prototype.createCells = function () {
  var name = this.createCell(),
      email = this.createCell(),
      action = this.createActionBtn();
  return [name, email, action];
}

DynamicTable.prototype.createActionBtn = function () {
  var cell = document.createElement("td");
  buttons = [
              this.createButton('Save'),
              this.createButton('Edit'),
              this.createButton('Delete')
            ];
  this.appendChildrenTo(cell, buttons);
  return cell;
}

DynamicTable.prototype.createCell = function () {
  var cell = document.createElement("td");
  var input = document.createElement("input"),
      label = document.createElement("span");
  input.type = "text";
  input.setAttribute("class", "input-box");  
  label.setAttribute("class", "label-box");   
  this.appendChildrenTo(cell, [input, label]);
  
  return cell;
}


DynamicTable.prototype.saveButtonClickEvent = function (row, save, nameInputField, emailInputField, nameSpanField, emailSpanField) {
  var emailRegEx =  /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9-]{2,}(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,4})$/;

  save.addEventListener("click", function () {
    var nameValue = nameInputField.value,
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
      row.setAttribute("class", "edit-data");
      nameSpanField.innerHTML = nameValue;
      emailSpanField.innerHTML = emailValue;
    }
  });
}

DynamicTable.prototype.editButtonClickEvent = function (row, edit) {
  edit.addEventListener("click", function () {
    row.setAttribute("class", "save-data"); 
  });
}

DynamicTable.prototype.deleteButtonClickEvent = function (row, del) {
  del.addEventListener("click", function () {
    row.remove();
  });
}
  
DynamicTable.prototype.createRow = function () {
  var rowCount = this.table.rows.length,
      row = this.table.insertRow(rowCount++),
      cells = this.createCells();
  this.appendChildrenTo(row, cells);
  this.bindActionButtons();
}

DynamicTable.prototype.appendChildrenTo = function(row, cells) {
  cells.forEach(function(v, i) {
    row.appendChild(v);
  })
}

DynamicTable.prototype.appendRow = function () {
  var _this = this;
  this.addRowBtn.addEventListener("click", function () {
    _this.createRow();
  });
}

DynamicTable.prototype.bindActionButtons = function () {
  var row = this.table.rows[this.table.rows.length - 1];
      save = row.getElementsByClassName("save")[0],
      edit = row.getElementsByClassName("edit")[0],
      del = row.getElementsByClassName("delete")[0];
      nameInputField = row.getElementsByTagName("input")[0],
      emailInputField = row.getElementsByTagName("input")[1],
      nameSpanField = row.getElementsByTagName("span")[0],
      emailSpanField = row.getElementsByTagName("span")[1];

    this.saveButtonClickEvent(row, save, nameInputField, emailInputField, nameSpanField, emailSpanField);
    this.editButtonClickEvent(row, edit);
    this.deleteButtonClickEvent(row, del);
}

DynamicTable.prototype.init = function(){
  this.setPageHeading();
  this.appendRow();
}

window.onload = function () {
  var pageTitle = document.title,
      addRowBtn = document.getElementById("add-row-btn"),
      table = document.getElementById("table"),
      dynamic_table = new DynamicTable(pageTitle, addRowBtn, table);
  dynamic_table.init();
}