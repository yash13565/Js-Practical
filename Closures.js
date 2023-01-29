// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z=x()
// console.log(z);//This line wil return whole function
// z() // this line will return the value because lexical environment memorised this value of function y.
// function x(){
//     var a=7;
//    return function y(){
//         console.log(a)
//     }
//     ;
// }
// var z=x()
// console.log(z);
// z()
// function x(){
//     var a=7;
//   function y(){
//         console.log(a)
//     }
//     a=100;
//     return y;
// }
// var z=x()
// console.log(z);
// z()//this time the output will be 100
function z(){
    var b=100;
    function x(){
        var a=10;
        function y(){
            console.log(a,b)
        }y();
    }x();
}z();