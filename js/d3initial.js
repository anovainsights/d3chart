d3.selectAll("button").on("click", function(){
    console.log("debuti cambiando de color");
    d3.selectAll("p").style("color","red");

});

d3.selectAll("p").on("click", function(){
    console.log("has pinchado en el texto");
   });

