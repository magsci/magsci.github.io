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

document.addEventListener("DOMContentLoaded",init,false);