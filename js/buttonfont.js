var buttonfont = document.getElementsByClassName("buttonfont");

var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

buttonfont.addEventListener('click', myFunction(), false);