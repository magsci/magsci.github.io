function myShowMore(){ 	 
	document.getElementById("end").style.display="block"; 
}
function myShowLess(){ 
	document.getElementById("end").style.display="none"; 
}
var i , imgs , pic ;

function rotate()
{
  pic.src = imgs[ i ] ;
  ( i === ( imgs.length -1 ) ) ? i=0 : i++ ;
  setTimeout( rotate , 4000 ) ; 
}

function init()
{
  pic = document.getElementById( "pic" ) ;
  imgs = [ "slideshow/nail_polish.png" ,"slideshow/maths_set.png" ,  "slideshow/tornado.png", "slideshow/htst.png" ] ;
  var preload = new Array() ;
  for( i = 0 ; i < imgs.length ; i++ )
  {
    preload[ i ] = new Image() ;
    preload[ i ].src = imgs[ i ] ;
  }
  i = 0 ;
  rotate() ;
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read about the challenge";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


document.addEventListener("DOMContentLoaded",init,false);