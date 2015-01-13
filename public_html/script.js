/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $(".you").css("background-color", "pink");
    
    $('p:nth-child(3)').css('color','blue');
    
    $('p:nth-child(2)').css('color','red');
    
     $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
     
     $('#replceWText').bind('click',replaceWText);
     
     $('#randPara').bind('click',addAPara);
     
     $('#removePara').bind('click',removeApara);
    
     });
     
     function removeApara(){
         $('#randPara p:last').remove();
     }
     
     function addAPara () {
         $('#randPara').append('<p>ADDED</p>');
     }
     
     function replaceWText(){
         $('replaceWText'),text('replaced!');
     }

function mouseOverMe() {
    $("h1").html("hi");
}

function mouseOutMe () {
    $('h1').html("hello");
}