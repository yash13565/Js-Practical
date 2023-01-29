// function x(){
//     var i=10;
//     setTimeout(function(){
//         console.log(i)
//     },3000)
//     console.log("hii")
// }
// x();
// function x(){
//     for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)}
//     console.log("hii")
// }
// x();//Output will print 6,5 times and to print after 1 sec we have to use let instead of var because let is blocked
//or you can wrap it in closure
function x(){
    for(var i=1;i<=5;i++){
        function close(x){
    setTimeout(function(){
        console.log(x)
    },x*1000)}close(i)
}
    console.log("hii")
}
x();