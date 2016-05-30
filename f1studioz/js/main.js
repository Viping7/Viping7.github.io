$(document).ready(function(){
  
   var vpw=$('body').width();
 var vph=$('body').height();    
    if(vpw>730){
     $('#tabs').removeClass('tab-content');
     $('#home').removeClass('tab-pane');
     $('#menu1').removeClass('tab-pane').removeClass('fade');
     $('#nav').removeClass('nav-tabs').hide();
     $('#home').show();
     
 }
 $('#chat').css({height:vph+'px'});    
    
    $('#message').submit(function(){
  
    });
    
$( window ).resize(function() {
    var vpw=$('body').width(); 
 if(vpw>730){
     $('#tabs').removeClass('tab-content');
     $('#home').removeClass('tab-pane');
     $('#menu1').removeClass('tab-pane').removeClass('fade');
     $('#nav').removeClass('nav-tabs').hide();
     $('#home').show();
     
 }  
else{
  $('#tabs').addClass('tab-content');
     $('#home').addClass('tab-pane');
     $('#menu1').addClass('tab-pane').addClass('fade');
     $('#nav').addClass('nav-tabs').show();
}    
});
    
    });
/*******************************************************Angular Js************************************************/
/*var app=angular.module('chatlist',[]);
var mycon=function($scope){
              $scope.products = ["Milk", "Bread", "Cheese"];
            };
var con=app.controller('mcon',mycon);*/