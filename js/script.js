/* Night Mode JavaScript By Ansh Chauhan 
https://github.com/AnshC  
https://anshc.github.io 
*/


/* 

Go through the "nightmode()" function and have fun experimenting with it.
Make sure that to render nightmode, you need to run the "nightmode()" function
To defualt load the page into nightmode, use an onload function on the body tag.

*/


// Toggle Functions

let NIGHTSTATE = false; 
let toggle = false;

// HTML elements

const nightmode_elements = document.getElementById("nightmain").querySelectorAll(".nightmode");
const nightmode_elements_white = document.getElementById("nightmain").querySelectorAll(".nightmode-w");
const nightmode_elements_switch = document.getElementById("nightmain").querySelectorAll(".nightmode-s");
const nightmode_elements_div = document.getElementById("nightmain").querySelectorAll(".nightmode-div");
const nightmode_elements_div2 = document.getElementById("nightmain").querySelectorAll(".nightmode-div2");

// Main On Click Function

function nightmode(){
    
    // Setting the nightmode state (used in toggling function)
    
    function setState(state){
        NIGHTSTATE = state;
        console.log("State: ", NIGHTSTATE);
    }

    if(NIGHTSTATE == false){

        // Night Mode On

        setState(true)
        for (var i = 0; i < nightmode_elements.length; i++){
            nightmode_elements[i].style.color = "var(--brandcolor)";
        }
        for(var i = 0; i < nightmode_elements_white.length; i++){
            nightmode_elements_white[i].style.color = "white";
        }
        for(var i = 0; i < nightmode_elements_switch.length; i++){
            nightmode_elements_switch[i].style.color = "white";
        }
        for(var i = 0; i < nightmode_elements_div.length; i++){
            nightmode_elements_div[i].style.backgroundColor = "var(--darksecondary)";
            nightmode_elements_div[i].style.boxShadow = "none";
        }
        for(var i = 0; i < nightmode_elements_div2.length; i++){
            nightmode_elements_div2[i].style.backgroundColor = "var(--darktertiary)";
            nightmode_elements_div2[i].style.border = "none";
        }
        document.getElementById("nightmain").style.backgroundColor = "var(--darkmain)";
        
        document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode'

        //Resetting the function (stopping the function here)

        let table = document.querySelector('#team-results table tbody');
        for (var i = 0; i < table.childElementCount; i++) {
            if (i % 2 == 1) {
                table.childNodes[i].style.backgroundColor = "red";
            }
        }


        toggle = true;
    }

    if(toggle == false){ 
        if(NIGHTSTATE == true){

            // Light Mode on

            setState(false)
            for (var i = 0; i < nightmode_elements.length; i++){
                nightmode_elements[i].style.color = "black";
            }
            for (var i = 0; i < nightmode_elements_white.length; i++){
                nightmode_elements_white[i].style.color = "black";
            }
            for(var i = 0; i < nightmode_elements_switch.length; i++){
                nightmode_elements_switch[i].style.color = "var(--brandcolor)";
            }
            for(var i = 0; i < nightmode_elements_div.length; i++){
                nightmode_elements_div[i].style.backgroundColor = "white";
                nightmode_elements_div[i].style.boxShadow = "grey 4px 3px 10px";
            }
            for(var i = 0; i < nightmode_elements_div2.length; i++){
                nightmode_elements_div2[i].style.backgroundColor = "var(--lightgrey)";
            }
            document.getElementById("nightmain").style.backgroundColor = "white";

            document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-moon"></i> Night Mode'

            let table = document.querySelector('#team-results table tbody');
        for (var i = 0; i < table.childElementCount; i++) {
            if (i % 2 == 1) {
                table.childNodes[i].style.backgroundColor = "green";
            }
        }

        }
   }

   //Resetting Function

   toggle = false;
}