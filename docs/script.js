function myFunctionL(params) {
    
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo").innerHTML = text.length;
}
function myFunctionS() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo1").innerHTML = str.slice(1,13);
    
}
 function myFunctionSub() {
     
     let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     document.getElementById("demo2").innerHTML = str1.substring(1,13);
 }

function myFunction() {
    let text = document.getElementById("demo3").innerHTML;
    document.getElementById("demo3").innerHTML =
    text.replace("Microsoft","Our website");
}
function myFunction1(params) {
    let text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML =
    text.toUpperCase();
}
function myFunction2() {
    let text = document.getElementById("demo5").innerHTML;
    document.getElementById("demo5").innerHTML =
    text.toLowerCase();
}
function myFunction3(params) {
    
    let text1 = "Hello";
    let text2 = "World!";
    let text3 = text1.concat(" ",text2);
    document.getElementById("demo6").innerHTML = text3;
}
function myFunction4() {
    let text1 = "     Hello World!     ";
    let text2 = text1.trim();
    document.getElementById("demo7").innerHTML =
    "Length text1=" + text1.length + "<br>Length2 text2=" + text2.length;
}
function myFunction5() {
    var text = "HELLO WORLD";
    document.getElementById("demo8").innerHTML = text.charAt(0);
}
function myFunction6() {
    var text = "HELLO WORLD";
    document.getElementById("demo9").innerHTML = text.charCodeAt(0);
}
function myFunction7(params) {
    let text = "a,b,c,d,e,f";
    const myArray = text.split(",");
    document.getElementById("demo10").innerHTML = myArray[0];
}