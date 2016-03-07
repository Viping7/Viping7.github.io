$(document).ready(function(){
var heightOfScreen=screen.height;
var wid=$('body').width();    
switch(heightOfScreen)
{   case 240: $('section').css({"padding-top":"0px"});
                $('.intro').css({"margin-top":"20px"});   
                break;
    case 360:   $('section').css({"padding-top":"0px"});
                $('.intro').css({"margin-top":"20px"});
                $('.geek_label_logo').css({"margin-top":"-40px"});
                $('.down_button').css({"margin-top":"0px"});
                $('#clients .heading').css({"margin-top":"20px"});
                break;
    case 400:   $('section').css({"padding-top":"0px"});
                $('.intro').css({"margin-top":"20px"});
                $('#services .heading').css({"margin-top":"20px","margin-bottom":"10px"});
                $('#services .row img').css({"width":"20%"});
                $('#services h3').css({"margin-top":"15px"});
                $('#services .down_button').css({"width":"18%"});
                $('#clients .heading').css({"margin-top":"50px"});
                $('#clients .col-xs-2 img').css({"margin-top":"80px"});
                $('#clients .col-xs-8 img').css({"width":"70%","margin-bottom":"-30px"});
                $('#map .heading').css({"margin-top":"20px"});
                $('#googleMap').css({"height":"230px"});
                $('#contact .heading').css({"margin-top":"0px"});
                break;
    case 480:   $('section').css({"padding-top":"60px","padding-bottom":"50px"});
                   $('#services .heading').css({"margin-top":"-20px","margin-bottom":"10px"});
                $('#map').css({"padding-top":"30px"});
                  $('#contact').css({"padding-bottom":"10px"});    
                break;
    case 533:   $('.heading').css({"margin-top":"60px"});
                $('#clients .heading').css({"margin-top":"-90px"});
                $('#map').css({"padding-top":"0px"});
                $('#contact').css({"padding-top":"0px","padding-bottom":"30px"});  
                break;
    case 568:   $('.home_section').css({"padding-top":"150px","padding-bottom":"50px"});  
                $('.heading').css({"margin-top":"20px"});
                $('#clients .heading').css({"margin-top":"-80px"});
                $('#services').css({"padding-top":"20px"});
                $('#services .row img').css({"width":"30%","margin-bottom":"30px;"});
                $('.down_button_black').css({"margin-top":"35px"});
                $('#map').css({"padding-top":"0px"});
                $('#map .heading').css({"margin-top":"10px"});
                $('#googleMap').css({"height":"350px"});
                $('#contact').css({"padding-top":"0px","padding-bottom":"40px"});
                $('#contact .heading').css({"margin-top":"90px"});
                break;
    case 640:   $('.home_section').css({"padding-top":"180px","padding-bottom":"65px"}); 
                $('#services').css({"padding-top":"50px"});
                $('#services .row img').css({"width":"35%","margin-bottom":"30px;"});
                $('#services h3').css({"margin-top":"32px","font-size":"1.6em"});
                $('#clients .heading').css({"margin-top":"-105px","margin-bottom":"60px"});
                $('#clients .down_button').css({"margin-bottom":"50px"});
                $('#map').css({"padding-top":"50px"});
                $('#googleMap').css({"height":"450px"});    
                  $('#contact').css({"padding-bottom":"90px"});  
                break;  
    case 800:   $('.home_section').css({"padding-top":"250px"});
                $('.down_button_black').css({"margin-top":"25px"});
                break;
    case 900:    $('section').css({"padding-top":"100px","padding-bottom":"80px"});  
                break;      
    case 1280:    $('.home_section').css({"padding-top":"420px","padding-bottom":"80px"});  
        $('.down_button').css({"margin-top":"390px"});  
        $('.down_button_black').css({"margin-top":"290px"});  
        $('#clients .down_button_black').css({"margin-top":"190px"});  
         $('#googleMap').css({"height":"890px"});
         $('#map .down_button').css({"margin-top":"100px"});
          $('input[type=text]').css({"height":"60px"});    
          $('.btn').css({"height":"60px"});    
          $('#contact').css({"padding-top":"80px","padding-bottom":"310px"});
                break; 
    case 1334:  $('#services .heading').css({"margin-top":"20px","margin-bottom":"10px"});
                break;
}     

/*************Page Scrolling**********/

$('.scroll').click(function(event){
event.preventDefault();
var b=$(this).attr('href');
var position=$(b).offset().top; 
$('html,body').animate({scrollTop:position},800);    
});    
/*************Text changer*************/
if(wid<805)
{
$('#map .heading').html('Find us');    
}
});
