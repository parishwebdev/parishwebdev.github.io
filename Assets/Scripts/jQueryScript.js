 
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