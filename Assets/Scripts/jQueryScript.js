 
function checkForScroll(){
  var initialY = $('.navbar').height() * 2; 

  if($(window).scrollTop() > initialY){
      $('.navbar').addClass("scrolled");
  }else{
      $('.navbar').removeClass("scrolled");
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkForScroll();
  });
}


/* -- Modal Images For Project Detail  -- */       
//Later come up with better pratice way or individual ext js pages
var navbar = document.getElementById('mainNavTag');
 
//get modal elements
var modal = document.getElementById('myModal1');
var img1 = document.getElementById('myImg1');
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById('caption1');

var modal2 = document.getElementById('myModal2');
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById('caption2');

var modal3 = document.getElementById('myModal3');
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById('caption3');

var modal4 = document.getElementById('myModal4');
var img4 = document.getElementById('myImg4');
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById('caption4');

var modal5 = document.getElementById('myModal5');
var img5 = document.getElementById('myImg5');
var modalImg5 = document.getElementById("img05");
var captionText1 = document.getElementById('caption1');

var modal6 = document.getElementById('myModal6');
var img6 = document.getElementById('myImg6');
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById('caption6');

var modal7 = document.getElementById('myModal7');
var img7 = document.getElementById('myImg7');
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById('caption7');

var modal8 = document.getElementById('myModal8');
var img8 = document.getElementById('myImg8');
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById('caption8');

var modal9 = document.getElementById('myModal9');
var img9 = document.getElementById('myImg9');
var modalImg9 = document.getElementById("img09");
var captionText9 = document.getElementById('caption9');

var modal10 = document.getElementById('myModal10');
var img10 = document.getElementById('myImg10');
var modalImg10 = document.getElementById("img10");
var captionText10 = document.getElementById('caption10');

var modal11 = document.getElementById('myModal11');
var img11 = document.getElementById('myImg11');
var modalImg11 = document.getElementById("img11");
var captionText11 = document.getElementById('caption11');

var modal12 = document.getElementById('myModal12');
var img12 = document.getElementById('myImg12');
var modalImg12 = document.getElementById("img12");
var captionText12 = document.getElementById('caption12');

var modal13 = document.getElementById('myModal13');
var img13 = document.getElementById('myImg13');
var modalImg13 = document.getElementById("img13");
var captionText13 = document.getElementById('caption13');

//Click Events

img1.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
    img1.removeClass = "thumbnail"
    captionText1.innerHTML = this.alt;
    navbar.style.zIndex = 0; 
}

 img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    img2.removeClass = "thumbnail"
    captionText2.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    img3.removeClass = "thumbnail"
    captionText3.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    img4.removeClass = "thumbnail"
    captionText4.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
    img5.removeClass = "thumbnail"
    captionText5.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
    img6.removeClass = "thumbnail"
    captionText6.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img7.onclick = function(){
    modal7.style.display = "block";
    modalImg7.src = this.src;
    img7.removeClass = "thumbnail"
    captionText7.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img8.onclick = function(){
    modal8.style.display = "block";
    modalImg8.src = this.src;
    img8.removeClass = "thumbnail"
    captionText8.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img9.onclick = function(){
    modal9.style.display = "block";
    modalImg9.src = this.src;
    img9.removeClass = "thumbnail"
    captionText9.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img10.onclick = function(){
    modal10.style.display = "block";
    modalImg10.src = this.src;
    img10.removeClass = "thumbnail"
    captionText10.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img11.onclick = function(){
    modal11.style.display = "block";
    modalImg11.src = this.src;
    img11.removeClass = "thumbnail"
    captionText11.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img12.onclick = function(){
    modal12.style.display = "block";
    modalImg12.src = this.src;
    img12.removeClass = "thumbnail"
    captionText12.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}

img13.onclick = function(){
    modal13.style.display = "block";
    modalImg13.src = this.src;
    img13.removeClass = "thumbnail"
    captionText13.innerHTML = this.alt;
    navbar.style.zIndex = 0;   
}
 

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];
var span9 = document.getElementsByClassName("close")[8];
var span10 = document.getElementsByClassName("close")[9];
var span11 = document.getElementsByClassName("close")[10];
var span12 = document.getElementsByClassName("close")[11];
var span13 = document.getElementsByClassName("close")[12];


span.onclick = function() { 
    navbar.style.zIndex = 1030;
    modal.style.display = "none";  
}  
span2.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal2.style.display = "none";  
} 
span3.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal3.style.display = "none";  
}
span4.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal4.style.display = "none";  
}
span5.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal5.style.display = "none";  
}
span6.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal6.style.display = "none";  
}
span7.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal7.style.display = "none";  
}
span8.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal8.style.display = "none";  
}
span9.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal9.style.display = "none";  
}
span10.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal10.style.display = "none";  
}
span11.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal11.style.display = "none";  
}
span12.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal12.style.display = "none";  
}
span13.onclick = function() { 
    navbar.style.zIndex = 1030;
   modal13.style.display = "none";  
}



 