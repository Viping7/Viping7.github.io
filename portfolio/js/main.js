$(document).ready(function(){
resizeDiv();
/**********Typed********************/
$(function(){
      $(".element").typed({
        stringsElement: $('#element1'),
        typeSpeed: 0,
        showCursor:false  
      });
  });
/****************************************/    
});
/****************Division Resize*************/
window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$('.back').css({'height': vph + 'px','background-size':'100% '+vph+'px'});  
if(vpw>1000){
$('section').css({'height': vph + 'px','background-size':'100% '+vph+'px'});  
}    
if(vpw<300)
{
var scrollbutpos=vph-200;    
}   
else if(vpw<700)
{
var scrollbutpos=vph-250;    
}
else
{
var scrollbutpos=vph-350;      
}       
    $('.scroll_button').css({'top':scrollbutpos});    
/*******************************************/
new WOW().init();   
    /*****************Pre Loader************/
 $('#navbar').hide();
$(window).load(function() {
$("#status").fadeOut();
$("#preloader").delay(1000).fadeOut("slow");
$('body').css({'overflow-y':'scroll'});
$('#navbar').delay(1000).fadeIn("10000");            
    });    

}