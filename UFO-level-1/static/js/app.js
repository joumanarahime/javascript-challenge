// from data.js
var tableData = data;

// YOUR CODE HERE!
var button=d3.select("#filter-btn");

var tbody=d3.select("tbody");
var datetimeArray=[];
function buildMenus(){
    tableData.forEach(sights => {
        datetimeArray.push(sights.datetime);

    });
    console.log(datetimeArray);
}

button.on("click", function(){
    var inputValue = d3.select("#datetime").property("value");
    tbody.selectAll('tr').remove();

    var filteredData = tableData.filter(sights => sights.datetime === inputValue)
     filteredData.forEach(sights => {
        var row = tbody.append('tr');
  
        Object.entries(sights).forEach(([key,value])=>{
           row.append('td').text(value);
        });
    });
    

});
// buildMenus();