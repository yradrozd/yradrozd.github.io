/*SLROLL TEXT*/
var anchors=document.querySelectorAll('a[href*="#"]')
for(let a of anchors){
  a.addEventListener('click',function(e){
    e.preventDefault()
    const id=a.getAttribute('href').substr(1)
    document.getElementById(id).scrollIntoView({
      behavior:'smooth', block:'start'
    })
  })
}
/*SLROLL BUTTON*/
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
     if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();
  });