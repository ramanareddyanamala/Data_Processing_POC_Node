var fs = require("fs");
var d3 = require("d3");
var _ = require("lodash");


fs.readFile("FoodList.csv", "utf8", function(error, data) {

    if(error){
        console.log(error);
    }

    data = d3.csvParse(data);
    //console.log(JSON.stringify(data));

    var maxWeight = d3.max(data, function(d) {
        return  +d.DatabaseNumber ;

    });
    console.log(maxWeight);

});