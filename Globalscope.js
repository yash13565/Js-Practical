var a=10; //This is a global scope
function b(){// This is also a global scope
               
}
function c(){
var x=10 // this is not a global scope
}
// console.log(window.a);
console.log(a)
console.log(this.a)
