var options = { mode: 'free',
  dragHandler: '.handle',
  onlyBody: true,
  animation: 300
};
var rowDragger;
var colDragger;
$(document).ready(function(){
  var table = document.getElementById('table')
  var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
  $('#viewfile').click(function(){
    console.warn("onclick viewfile");
     var rdr = new FileReader();
     rdr.onload = function(e){
       console.warn("file reader onload", e);
       var therows = e.target.result.split("\n");
       console.error("suraj", therows);
      for(var row = 0; row<therows.length;row++){
        var columns = therows[row].split(",");
        var newRow = tableRef.insertRow(row);
        console.log(therows[row]);
        for(var col = 0; col < columns.length; col++){
          var newCell = newRow.insertCell(col);
          newCell.className = "handle";
          newCell.innerHTML = columns[col];
        }
      }
     
      rowDragger = tableDragger(table,options);
      rowDragger.on('drop', handleTransition);
     
    } 
    rdr.readAsText($("#inputfile")[0].files[0]);
  });
});

function handleTransition (from, to){
  console.warn("you shifted from ", from, " to ", to);
}


