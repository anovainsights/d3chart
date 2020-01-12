function SetToGreen (){
return d3.select(this).style("color", "green")};

d3.select("body").append("p").text("Hello World!");
d3.selectAll("div")
    .on("click").append("p").text("Mouseover!!!");