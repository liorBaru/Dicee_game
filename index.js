

$(".playmeBtn").click(function(){
  randomNumber1 = Math.floor(Math.random() * 6) +1;
  img1str = "images" + "\/" +"dice" +randomNumber1+ ".png"
  document.querySelector( ".img1" ).setAttribute( "src",  img1str )

  randomNumber2 = Math.floor(Math.random() * 6) +1;
  img2str = "images" + "\/" +"dice" +randomNumber2+ ".png"
  document.querySelector( ".img2" ).setAttribute( "src",  img2str )
  
  if (randomNumber1 > randomNumber2) {
    document.querySelector( "h1" ).innerHTML = "player 1 Won";
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector( "h1" ).innerHTML = "player 2 Won";
  }
  else {
    document.querySelector( "h1" ).innerHTML = "DRAW";
  }
});
