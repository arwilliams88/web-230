var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
function myName (Andrea, Williams){
var f = "Andrea";
var l = "Williams";
var a = "Exercise 2.3";
}

// function 
function myName() {
    display: function(f, l, a) {
    var msg = "\n" + f + " " + l + "\n" 
        + a + "\nDate: " + new Date().toLocaleDateString(); 
    return msg; 
    }
}

// output 
console.log('\n'); 





// end program 