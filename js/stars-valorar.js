$(document).ready(function(){
$( "li.primera-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
    }else{
        $(this).removeClass("estrella-activa");
        $(this).addClass("estrella-inactiva");
    }    
});
$( "li.segunda-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
    }else{
        $(this).removeClass("estrella-activa");
        $(this).addClass("estrella-inactiva");
        $(this).prevAll().removeClass("estrella-activa");
    }     
    
});
$( "li.tercera-estrella" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
    }else{
        $(this).removeClass("estrella-activa");
        $(this).addClass("estrella-inactiva");
        $(this).prevAll().removeClass("estrella-activa");
    }    
});
$( "li.cuarta-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll("li").addClass("estrella-activa");
    }else{
        $(this).removeClass("estrella-activa");
        $(this).addClass("estrella-inactiva");
        $(this).prevAll().removeClass("estrella-activa");
    }    
});
$( "li.quinta-estrella" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
    }else{
        $(this).removeClass("estrella-activa");
        $(this).addClass("estrella-inactiva");
        $(this).prevAll().removeClass("estrella-activa");
    }    
});
 })