var randomnum1 = Math.floor(Math.random()*2)+1;
var randomImage = "images/coin"+randomnum1+".jpeg";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);
var randomnum2 = Math.floor(Math.random()*2)+1;
var randomImage2 = "images/coin"+randomnum2+".jpeg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);
if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML= "Player 1 won ❤️";
}
else if (randomnum2> randomnum1){
    document.querySelector("h1").innerHTML = "Player 2 won 😊";
}
else{
    document.querySelector("h1").innerHTML = "Its a tie 🤜🏻🤛🏻";
}