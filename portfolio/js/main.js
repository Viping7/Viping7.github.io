$(document).ready(function(){
resizeDiv();
});

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

new WOW().init();   

}