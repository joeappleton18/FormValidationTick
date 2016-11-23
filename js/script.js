function isValid(name) {
    "use strict";
    
    //name = "first_name";
    
    var element = document.getElementById(name);
    var pic = document.getElementById("valid_" + name);
    
    console.log(name)
    
    if (element.validity.valid === true) {
        pic.style.visibility = "visible";
        pic.src = "/pics/tick.png";
    } else {
        pic.style.visibility = "visible";
        pic.src = "/pics/cross.png";
    }
}