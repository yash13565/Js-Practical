console.log(a) //Temporal deadzone->the time since when let variable was hoisted and till it is intialised some value.
        
let a=10; //Whenever u try to access a variable inside a temporal deadzone it will give u reference error
var b=100;