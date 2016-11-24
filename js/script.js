"use strict";

var form = document.getElementById('travel_survey');


form['first_name'].addEventListener("input", function(element){
        
    name = element.target.name;
    isValid(name)

});

    


function isValid(name) {
   
    console.log(name);
    //name = "first_name";
    
    var element = document.getElementById(name);
    var pic = document.getElementById("valid_" + name);
    
    console.log(name)
    
    if (element.validity.valid === true) {
        pic.style.visibility = "visible";
        pic.src = "/pics/tick.png";
        
        return true;
    } 
    
    pic.style.visibility = "visible";
    pic.src = "/pics/cross.png";
  
}