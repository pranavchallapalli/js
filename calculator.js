var a = prompt("enter num a: ");
var b = prompt("enter number b: ");
alert("choices: a:add, b:sub, c:multiply, d:divide");
var c =prompt("enter teh choice");
if(c=="a"){
var sum = parseInt(a)+parseInt(b);
console.log(sum);
}
else if (c== "b") {
var sub= parseInt(a)-parseInt(b);
console.log(sub);
}
else if (c == "c" ) {
var mul = parseFloat(a)*parseFloat(b);
console.log(mul);
}
else{
    var div = parseFloat(a)/parseFloat(b) ;
    console.log(div);
}