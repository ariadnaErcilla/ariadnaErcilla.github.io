$(document).ready(function(){
$( "li.primera-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
    }else{
        $(this).nextAll().addClass("estrella-inactiva");
    }    
});
$( "li.segunda-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{

        $(this).nextAll().addClass("estrella-inactiva");
        
    }     
    
});
$( "li.tercera-estrella" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{
    
         $(this).nextAll().addClass("estrella-inactiva");
        
    }    
});
$( "li.cuarta-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{
         $(this).nextAll().addClass("estrella-inactiva");
       
    }    
});
$( "li.quinta-estrella" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{
         $(this).nextAll().addClass("estrella-inactiva");
       
    }    
});
 })