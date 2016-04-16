 $('#navbar').hide();
$(document).ready(function(){
resizeDiv();
//
$('#sendmail').submit(function(event){
var mail=$('#email').val();
if(mail=='')
{
$('.form-control').css({'border':'2px solid #d9a693'});
event.preventDefault();    
}
else{
    
var data='email='+mail;    
event.preventDefault();
    $.ajax({
    type:"POST",
    url:'contact.php',
    data:data,
    success:function(data){
        if(data=="Registered")
        {
            $('#sendmail').html("<h3>Thank you for showing intrest in working with Me</h3>");
        }
        else if(data=="Registered_already")
         {
         $('#sendmail').html("<h3>I already got your mail already. Sorry for the delay ,I will get back to you as soon as possible </h3>");
         }
    }
});
    
}    
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

$(window).load(function() {
$("#status").fadeOut();
$("#preloader").delay(1000).fadeOut("slow");
$('body').css({'overflow-y':'scroll'});
$('#navbar').delay(1000).fadeIn("10000");            
    
$(function(){
      $(".element").typed({
        stringsElement: $('#element1'),
        typeSpeed: 0,
        showCursor:false  
      });
  });
});    

}
