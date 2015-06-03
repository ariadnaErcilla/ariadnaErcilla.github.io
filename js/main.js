
$(document).ready(function(){
  /*filtros-responsive*/
  $('#abrir-filtros').click(function(e){
    $(this).hide();
    $('#cerrar-filtros').show();
    $('.filtros-2').show();
    return false;
  });

  $('#cerrar-filtros').click(function(e){
    $(this).hide();
    $('#abrir-filtros').show();
    $('.filtros-2').hide();
    return false;
  });

  $('#abrir-ordenar').click(function(e){
    $(this).hide();
    $('#cerrar-ordenar').show();
    $('.container-ordenar-mobile').show();
    return false;
  });

  $('#cerrar-ordenar').click(function(e){
    $(this).hide();
    $('#abrir-ordenar').show();
    $('.container-ordenar-mobile').hide();
    return false;
  });
  /*filtros*/
  $('.categoria-arquitectura').click(function(e){
    e.preventDefault();
    if($('.categoria-arquitectura').hasClass('select')) {
      $('.categoria-arquitectura').removeClass('select');
      $('.anuncios li:not(.arquitectura)').show();
    } else {
      $('.categoria-arquitectura').addClass('select');
      $('.anuncios li.arquitectura').show();
      $('.anuncios li:not(.arquitectura)').hide();
      $('.lista-categorias a:not(.categoria-arquitectura)').removeClass('select');
    }
  });
  $('.categoria-animacion').click(function(e){
    e.preventDefault();
    if($('.categoria-animacion').hasClass('select')) {
      $('.categoria-animacion').removeClass('select');
      $('.anuncios li:not(.animacion)').show();
    } else {
      $('.categoria-animacion').addClass('select');
      $('.anuncios li.animacion').show();
      $('.anuncios li:not(.animacion)').hide();
      $('.lista-categorias a:not(.categoria-animacion)').removeClass('select');
    }
  });
  $('.categoria-audiovisual').click(function(e){
    e.preventDefault();
    if($('.categoria-audiovisual').hasClass('select')) {
      $('.categoria-audiovisual').removeClass('select');
      $('.anuncios li:not(.audiovisual)').show();
    } else {
      $('.categoria-audiovisual').addClass('select');
      $('.anuncios li.audiovisual').show();
      $('.anuncios li:not(.audiovisual)').hide();
      $('.lista-categorias a:not(.categoria-audiovisual)').removeClass('select');
    }
  });
  $('.categoria-industrial').click(function(e){
    e.preventDefault();
    if($('.categoria-industrial').hasClass('select')) {
      $('.categoria-industrial').removeClass('select');
      $('.anuncios li:not(.industrial)').show();
    } else {
      $('.categoria-industrial').addClass('select');
      $('.anuncios li.industrial').show();
      $('.anuncios li:not(.industrial)').hide();
      $('.lista-categorias a:not(.categoria-industrial)').removeClass('select');
    }
  });
  $('.categoria-grafico').click(function(e){
    e.preventDefault();
    if($('.categoria-grafico').hasClass('select')) {
      $('.categoria-grafico').removeClass('select');
      $('.anuncios li:not(.grafico)').show();
    } else {
      $('.categoria-grafico').addClass('select');
      $('.anuncios li.grafico').show();
      $('.anuncios li:not(.grafico)').hide();
      $('.lista-categorias a:not(.categoria-grafico)').removeClass('select');
    }
  });
  $('.categoria-moda').click(function(e){
   e.preventDefault();
   if($('.categoria-moda').hasClass('select')) {
    $('.categoria-moda').removeClass('select');
    $('.anuncios li:not(.moda)').show();
  } else {
    $('.categoria-moda').addClass('select');
    $('.anuncios li.moda').show();
    $('.anuncios li:not(.moda)').hide();
    $('.lista-categorias a:not(.categoria-moda)').removeClass('select');
  }
});
  $('.categoria-web').click(function(e){
    e.preventDefault();
    if($('.categoria-web').hasClass('select')) {
      $('.categoria-web').removeClass('select');
      $('.anuncios li:not(.web)').show();
    } else {
      $('.categoria-web').addClass('select');
      $('.anuncios li.web').show();
      $('.anuncios li:not(.web)').hide();
      $('.lista-categorias a:not(.categoria-web)').removeClass('select');
    }
  });
  $('.categoria-fotografia').click(function(e){
    e.preventDefault();
    if($('.categoria-fotografia').hasClass('select')) {
      $('.categoria-fotografia').removeClass('select');
      $('.anuncios li:not(.fotografia)').show();
    } else {
      $('.categoria-fotografia').addClass('select');
      $('.anuncios li.fotografia').show();
      $('.anuncios li:not(.fotografia)').hide();
      $('.lista-categorias a:not(.categoria-fotografia)').removeClass('select');
    }
  });
  $('.categoria-programacion').click(function(e){
    e.preventDefault();
    if($('.categoria-programacion').hasClass('select')) {
      $('.categoria-programacion').removeClass('select');
      $('.anuncios li:not(.programacion)').show();
    } else {
      $('.categoria-programacion').addClass('select');
      $('.anuncios li.programacion').show();
      $('.anuncios li:not(.programacion)').hide();
      $('.lista-categorias a:not(.categoria-programacion)').removeClass('select');
    }
  });
  /*editar perfil*/
  $(".lapiz-clicar-1").click(function() {
    $('.perfil-hide-1').toggle();
    $('.perfil-show-1').toggle();
  });
  $(".lapiz-clicar-2").click(function() {
    $('.perfil-hide-2').toggle();
    $('.perfil-show-2').toggle();
  });
  $(".lapiz-clicar-3").click(function() {
    $('.perfil-hide-3').toggle();
    $('.perfil-show-3').toggle();
  });
  /*mensajeria*/

  $('.pestanya-m-no-leido').click(function() {
    $('.option-recibido').hide();
    $('.option-no-leido').show();
    $('.option-enviado').hide();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-no-leido').addClass('seleccionado-m');
    return false;
  });
  $('.pestanya-m-enviado').click(function() {
    $('.option-recibido').hide();
    $('.option-no-leido').hide();
    $('.option-enviado').show();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-enviado').addClass('seleccionado-m');
    return false;
  });
  $('.pestanya-m-recibido').click(function() {
    $('.option-recibido').show();
    $('.option-no-leido').hide();
    $('.option-enviado').hide();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-recibido').addClass('seleccionado-m');
    return false;
  });
  $(".mensaje-1").click(function () {
    $('.mensaje-desplegado-1').fadeToggle("fast");
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
  });

  $(".mensaje-2").click(function () {
    $('.mensaje-desplegado-2').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
  });

  $(".mensaje-3").click(function () {
    $('.mensaje-desplegado-3').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
  });

  $(".mensaje-4").click(function () {
    $('.mensaje-desplegado-4').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-5').hide();
  });

  $(".mensaje-5").click(function () {
    $('.mensaje-desplegado-5').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
  });
  /*ordenar*/
  $('a.reciente').click(function(e) {
    e.preventDefault();
    tinysort('ul.anuncios>li',{data:'reciente', order:'desc'});
    $('.reciente').addClass('selection');
    $('.menu-ordenar a:not(.reciente').removeClass('selection');
  });

  $('a.popular').click(function(e) {
    e.preventDefault();
    tinysort('ul.anuncios>li',{data:'popularidad', order:'desc'});
    $('.popular').addClass('selection');
    $('.menu-ordenar a:not(.popular').removeClass('selection');
  });
  $('a.puntuado').click(function(e) {
    e.preventDefault();
    tinysort('ul.anuncios>li',{data:'puntuacion', order:'desc'});
    $('.puntuado').addClass('selection');
    $('.menu-ordenar a:not(.puntuado').removeClass('selection');
  });
  /*pestanyas*/
  $('.pestanya-2').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-2').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-2').addClass('seleccionado');
    return false;
  });
  $('.pestanya-3').click(function() {
    $('.option-1').hide();
    $('.option-2').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-3').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-3').addClass('seleccionado');
    return false;
  });
  $('.pestanya-4').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-4').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-4').addClass('seleccionado');
    return false;
  });
  $('.pestanya-5').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-6').hide();
    $('.option-5').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-5').addClass('seleccionado');
    return false;
  });
  $('.pestanya-6').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-6').addClass('seleccionado');
    return false;
  });
  $('.pestanya-1').click(function() {
    $('.option-2-1').hide();
    $('.option-3-1').hide();
    $('.option-4-1').hide();
    $('.option-5-1').hide();
    $('.option-6-1').hide();
    $('.option-1-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-1').addClass('seleccionado');
    return false;
  });
  $('.pestanya-2').click(function() {
    $('.option-1-1').hide();
    $('.option-3-1').hide();
    $('.option-4-1').hide();
    $('.option-5-1').hide();
    $('.option-6-1').hide();
    $('.option-2-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-2').addClass('seleccionado');
    return false;
  });
  $('.pestanya-3').click(function() {
    $('.option-1-1').hide();
    $('.option-2-1').hide();
    $('.option-4-1').hide();
    $('.option-5-1').hide();
    $('.option-6-1').hide();
    $('.option-3-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-3').addClass('seleccionado');
    return false;
  });
  $('.pestanya-4').click(function() {
    $('.option-1-1').hide();
    $('.option-3-1').hide();
    $('.option-2-1').hide();
    $('.option-5-1').hide();
    $('.option-6-1').hide();
    $('.option-4-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-4').addClass('seleccionado');
    return false;
  });
  $('.pestanya-5').click(function() {
    $('.option-1-1').hide();
    $('.option-3-1').hide();
    $('.option-4-1').hide();
    $('.option-2-1').hide();
    $('.option-6-1').hide();
    $('.option-5-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-5').addClass('seleccionado');
    return false;
  });
  $('.pestanya-6').click(function() {
    $('.option-1-1').hide();
    $('.option-3-1').hide();
    $('.option-4-1').hide();
    $('.option-2-1').hide();
    $('.option-5-1').hide();
    $('.option-6-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-6').addClass('seleccionado');
    return false;
  });

  $('.pestanya-1').click(function() {
    $('.option-2-1').hide();
    $('.option-3-1').hide();
    $('.option-4-1').hide();
    $('.option-5-1').hide();
    $('.option-6-1').hide();
    $('.option-1-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-1').addClass('seleccionado');
    return false;
  });
  /*tablas*/
  $('td .icono-tabla-off').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-on').css({
      'display': 'block'
    });
  });
  $('td .icono-tabla-on').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-off').css({
      'display': 'block'
    });
  });
  /*buscador*/
  $('#abrir').click(function(e){
    $('.buscador-desplegado').show();
    return false;
  });

  $('#cerrar').click(function(e){
   $('.buscador-desplegado').hide();
   return false;
 });

  /*niveles barras*/
  $( "li.primera-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
    }else{
      $(this).nextAll().addClass("barra-inactiva");
    }
  });

  $( "li.segunda-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{

      $(this).nextAll().addClass("barra-inactiva");

    }

  });
  $( "li.tercera-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{

     $(this).nextAll().addClass("barra-inactiva");

   }
 });
  $( "li.cuarta-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{
     $(this).nextAll().addClass("barra-inactiva");

   }
 });
  $( "li.quinta-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{
     $(this).nextAll().addClass("barra-inactiva");

   }
 });
  $( "li.sexta-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{
     $(this).nextAll().addClass("barra-inactiva");

   }
 });
  $( "li.septima-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{
     $(this).nextAll().addClass("barra-inactiva");

   }
 });
  $( "li.octava-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{
     $(this).nextAll().addClass("barra-inactiva");

   }
 });
  $( "li.novena-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{
     $(this).nextAll().addClass("barra-inactiva");

   }
 });
  $( "li.decima-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
      $(this).addClass("barra-activa");
      $(this).removeClass("barra-inactiva");
      $(this).prevAll().addClass("barra-activa");
      $(this).prevAll().removeClass("barra-inactiva");
    }else{
     $(this).nextAll().addClass("barra-inactiva");

   }
 });

  /*eliminar en perfil*/
  $( ".boton-eliminar-1" ).click(function(e){
    $(".contenedor-eliminar-1").hide();
  });
  $( ".boton-eliminar-2" ).click(function(e){
    $(".contenedor-eliminar-2").hide();
  });
  $( ".boton-eliminar-3" ).click(function(e){
    $(".contenedor-eliminar-3").hide();
  });
  $( ".boton-eliminar-4" ).click(function(e){
    $(".contenedor-eliminar-4").hide();
  });
  $( ".boton-eliminar-5" ).click(function(e){
    $(".contenedor-eliminar-5").hide();
  });
  $( ".boton-eliminar-6" ).click(function(e){
    $(".contenedor-eliminar-6").hide();
  });
  /*forms-errors*/
  function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail))
      return true;
    else
      return false;
  }
  $('#login button, #login-duda button, #login-curso button, #login-contactar button, #recuperar button').click(function(e) {
    e.preventDefault();
    var email = $('#login input[name="email"], #login-curso input[name="email"], #login-duda input[name="email"], #login-contactar input[name="email"], #recuperar input[name="email"]');
    var label = email.siblings('label');
    var passwordname = $(' #login input[name="password"], #login-curso input[name="password"], #login-duda input[name="password"], #login-contactar input[name="password"]');
    var labelpass = passwordname.siblings('label');
    var password = $.trim(passwordname.val());
    if(validateEmail(email.val())) {
      email.removeClass('error');
      label.hide();
    } else {
      email.addClass('error');
      label.show();
    }
    if(password.length >= 4 && password.length <= 15) {
      passwordname.removeClass('error');
      labelpass.hide();
    } else {
      passwordname.addClass('error');
      labelpass.show();
    }
  });
  $('#registro button, #registro-curso button, #registro-duda button, #registro-contactar button').click(function(e) {
    e.preventDefault();
    var email = $('#registro input[name="email"],#registro-curso input[name="email"],#registro-duda input[name="email"],#registro-contactar input[name="email"] ');
    var label = email.siblings('label');
    var passwordname = $('#registro input[name="password"],#registro-curso input[name="password"],#registro-duda input[name="password"],#registro-contactar input[name="password"]');
    var labelpass = passwordname.siblings('label');
    var password = $.trim(passwordname.val());
    var name = $('#registro input[name="personal"], #registro-curso input[name="personal"], #registro-duda input[name="personal"], #registro-contactar input[name="personal"]');
    var labelname = name.siblings('label');
    var personalname = $.trim(name.val());
    if(personalname== "") {
      name.addClass('error');
      labelname.show();
    } else {
      name.removeClass('error');
      labelname.hide();
    }
    if(validateEmail(email.val())) {
      email.removeClass('error');
      label.hide();
    } else {
      email.addClass('error');
      label.show();
    }
    if(password.length >= 4 && password.length <= 15) {
      passwordname.removeClass('error');
      labelpass.hide();
    } else {
      passwordname.addClass('error');
      labelpass.show();
    }
  });
$('#contactar button, #publicar-curso button, #publicar-duda button, #modificar-curso').click(function(e) {
  e.preventDefault();
  var message = $('#contactar textarea[name="message"], #publicar-duda input[name="description"], #publicar-curso input[name="description"],#modificar-curso input[name="description"]');
  var labelmessage = message.siblings('label');
  var textmessage = $.trim(message.val());
  var check = $('#contactar input[name="check"],#publicar-curso input[name="check"],#publicar-duda input[name="check"],#modificar-curso input[name="check"]');
  var labelcheck = check.siblings('label');
  var checkname= $.trim(check.val());
  var title = $('#publicar-curso input[name="title"], #publicar-duda input[name="title"], #modificar-curso input[name="title"]');
  var labeltitle = title.siblings('label');
  var titlename= $.trim(title.val());
  var select = $('#publicar-curso input[name="select"], #publicar-duda input[name="select"], #modificar-curso input[name="select"]');
  var labelselect = select.siblings('label');
  var selectname= $.trim(select.val());
  if(textmessage == "") {
    message.addClass('error');
    labelmessage.show();
  } else {
    message.removeClass('error');
    labelmessage.hide();
  }
  if(titlename == "") {
    title.addClass('error');
    labeltitle.show();
  } else {
    title.removeClass('error');
    labeltitle.hide();
  }
  if(checkname.checked=="false") {
    check.addClass('error');
    labelcheck.show();
  } else {
    check.removeClass('error');
    labelcheck.hide();
  }
  if(selectname.value =="") {
    select.addClass('error');
    labelselect.show();
  } else {
    select.removeClass('error');
    labelselect.hide();
  }
});

/*show-popup*/
$('.show-login').click(function(e){
  e.preventDefault();
  $($('#login')[0]).show();
});
$('.close').click(function(e){
  $('.masc:visible').hide();
});
$('#show-registro').click(function(e){
  e.preventDefault();
  $($('#registro')[0]).show();
});
$('#show-contactar').click(function(e){
  e.preventDefault();
  $($('#contactar')[0]).show();
});
$('#show-publicar-curso').click(function(e){
  e.preventDefault();
  $($('#publicar-curso')[0]).show();
});
$('#show-publicar-duda').click(function(e){
  e.preventDefault();
  $($('#publicar-duda')[0]).show();
});
$('#show-modificar-curso').click(function(e){
  e.preventDefault();
  $($('#modificar-curso')[0]).show();
});
$('#show-valorar').click(function(e){
  e.preventDefault();
  $($('#valorar')[0]).show();
});
$('.show-gracias-curso').click(function(e){
  e.preventDefault();
  $($('#gracias-curso')[0]).show();
});
$('.show-gracias-duda').click(function(e){
  e.preventDefault();
  $($('#gracias-duda')[0]).show();
});
$('.show-gracias-contactar').click(function(e){
  e.preventDefault();
  $($('#gracias-contactar')[0]).show();
});
$('.show-recuperar').click(function(e){
  e.preventDefault();
  $($('#recuperar')[0]).show();
});
$('.show-registro-curso').click(function(e){
  e.preventDefault();
  $($('#registro-curso')[0]).show();
});
$('.show-registro-duda').click(function(e){
  e.preventDefault();
  $($('#registro-duda')[0]).show();
});
$('.show-registro-contactar').click(function(e){
  e.preventDefault();
  $($('#registro-contactar')[0]).show();
});
$('.show-login-curso').click(function(e){
  e.preventDefault();
  $($('#login-curso')[0]).show();
});
$('.show-login-duda').click(function(e){
  e.preventDefault();
  $($('#login-duda')[0]).show();
});
$('.show-login-contactar').click(function(e){
  e.preventDefault();
  $($('#login-contactar')[0]).show();
});
$('.show-publicarcur-2').click(function(e){
  e.preventDefault();
  $($('#publicar-curso-2')[0]).show();
});
$('.show-publicardud-2').click(function(e){
  e.preventDefault();
  $($('#publicar-duda-2')[0]).show();
});
$('.show-contactar-2').click(function(e){
  e.preventDefault();
  $($('#contactar-2')[0]).show();
});
/*show-consejos*/
$('.abrir-consejos').click(function(e){
  $('.show-consejos').show();
  $('.hide-consejos').hide();
  return false;
});
$('.cerrar-consejos').click(function(e){
  $('.show-consejos').hide();
  $('.hide-consejos').show();
  return false;
});
/*links-popups*/
$('.login').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #login', function() {
    $('#login').show();
    $('#login button, #recuperar button').click(function(e) {
      e.preventDefault();
      var email = $('#login input[name="email"], #recuperar input[name="email"]');
      var label = email.siblings('label');
      var passwordname = $(' #login input[name="password"]');
      var labelpass = passwordname.siblings('label');
      var password = $.trim(passwordname.val());
      if(validateEmail(email.val())) {
        email.removeClass('error');
        label.hide();
      } else {
        email.addClass('error');
        label.show();
      }
      if(password.length >= 4 && password.length <= 15) {
        passwordname.removeClass('error');
        labelpass.hide();
      } else {
        passwordname.addClass('error');
        labelpass.show();
      }
    });
    $('#registro').hide();
    $('.close').click(function(e){
      $('.masc:visible').hide();
      $('#registro').hide();
    });
    $('.show-recuperar').click(function(e){
      e.preventDefault();
      $('#popup').load('popups.html #recuperar', function() {
        $($('#recuperar')[0]).show();
        $('#recuperar button').click(function(e) {
          e.preventDefault();
          var email = $('#recuperar input[name="email"]');
          var label = email.siblings('label');
          if(validateEmail(email.val())) {
            email.removeClass('error');
            label.hide();
          } else {
            email.addClass('error');
            label.show();
          }
        });
        $('.close').click(function(e) {
          $('.masc:visible').hide();
        })
        $('.show-login').click(function(e){
          e.preventDefault();
          $('#popup').load('popups.html #login', function() {
            $($('#login')[0]).show();
            $('#login button, #recuperar button').click(function(e) {
              e.preventDefault();
              var email = $('#login input[name="email"], #recuperar input[name="email"]');
              var label = email.siblings('label');
              var passwordname = $(' #login input[name="password"]');
              var labelpass = passwordname.siblings('label');
              var password = $.trim(passwordname.val());

              if(validateEmail(email.val())) {
                email.removeClass('error');
                label.hide();
              } else {
                email.addClass('error');
                label.show();

              }
              if(password.length >= 4 && password.length <= 15) {
                passwordname.removeClass('error');
                labelpass.hide();
              } else {
                passwordname.addClass('error');
                labelpass.show();

              }
            });
            $('.close').click(function(e) {
              $('.masc:visible').hide();
            })
          })
})
})
})
});
});
$('.registrate').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #registro', function() {
    $('#registro').show();
    $('#registro button').click(function(e) {
      e.preventDefault();
      var email = $('#registro input[name="email"]');
      var label = email.siblings('label');
      var passwordname = $('#registro input[name="password"]');
      var labelpass = passwordname.siblings('label');
      var password = $.trim(passwordname.val());
      var name = $('#registro input[name="personal"]');
      var labelname = name.siblings('label');
      var personalname = $.trim(name.val());
      if(personalname== "") {
        name.addClass('error');
        labelname.show();
      } else {
        name.removeClass('error');
        labelname.hide();
      }
      if(validateEmail(email.val())) {
        email.removeClass('error');
        label.hide();
      } else {
        email.addClass('error');
        label.show();
      }
      if(password.length >= 4 && password.length <= 15) {
        passwordname.removeClass('error');
        labelpass.hide();
      } else {
        passwordname.addClass('error');
        labelpass.show();
      }

    });
$('#login').show();
$('.close').click(function(e){
  $('.masc:visible').hide();
  $('#registro').hide();
});
$('.show-login').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #login', function() {
    $($('#login')[0]).show();
    $('#login button, #recuperar button').click(function(e) {
      e.preventDefault();
      var email = $('#login input[name="email"], #recuperar input[name="email"]');
      var label = email.siblings('label');
      var passwordname = $(' #login input[name="password"]');
      var labelpass = passwordname.siblings('label');
      var password = $.trim(passwordname.val());
      if(validateEmail(email.val())) {
        email.removeClass('error');
        label.hide();
      } else {
        email.addClass('error');
        label.show();
      }
      if(password.length >= 4 && password.length <= 15) {
        passwordname.removeClass('error');
        labelpass.hide();
      } else {
        passwordname.addClass('error');
        labelpass.show();
      }
    });
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })
    $('.show-recuperar').click(function(e){
      e.preventDefault();
      $('#popup').load('popups.html #recuperar', function() {
        $($('#recuperar')[0]).show();
        $('#recuperar button').click(function(e) {
          e.preventDefault();
          var email = $('#recuperar input[name="email"]');
          var label = email.siblings('label');
          if(validateEmail(email.val())) {
            email.removeClass('error');
            label.hide();
          } else {
            email.addClass('error');
            label.show();
          }
        });
        $('.close').click(function(e) {
          $('.masc:visible').hide();
        })
      })
    })
  })
})
});
});
$('.publicar-curso').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #publicar-curso', function() {
    $('#publicar-curso').show();
    $('#publicar-curso button').click(function(e) {
      e.preventDefault();
      var message = $('#publicar-curso input[name="description"]');
      var labelmessage = message.siblings('label');
      var textmessage = $.trim(message.val());
      var check = $('#publicar-curso input[name="check"]');
      var labelcheck = check.siblings('label');
      var checkname= $.trim(check.val());
      var title = $('#publicar-curso input[name="title"]');
      var labeltitle = title.siblings('label');
      var titlename= $.trim(title.val());
      var select = $('#publicar-curso input[name="select"]');
      var labelselect = select.siblings('label');
      var selectname= $.trim(select.val());
      if(textmessage == "") {
        message.addClass('error');
        labelmessage.show();
      } else {
        message.removeClass('error');
        labelmessage.hide();
      }
      if(titlename == "") {
        title.addClass('error');
        labeltitle.show();
      } else {
        title.removeClass('error');
        labeltitle.hide();
      }
      if(checkname.checked=="false") {
        check.addClass('error');
        labelcheck.show();
      } else {
        check.removeClass('error');
        labelcheck.hide();
      }
      if(selectname.value =="") {
        select.addClass('error');
        labelselect.show();
      } else {
        select.removeClass('error');
        labelselect.hide();
      }
    });
$('.close').click(function(e){
  $('.masc:visible').hide();
});
$('.abrir-consejos').click(function(e){
  $('.show-consejos').show();
  $('.hide-consejos').hide();
  return false;
});

$('.cerrar-consejos').click(function(e){
  $('.show-consejos').hide();
  $('.hide-consejos').show();
  return false;
});
$('.show-registro-curso').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #registro-curso', function() {
    $('#registro-curso').show();
    $('#registro-curso button').click(function(e) {
      e.preventDefault();
      var email = $('#registro-curso input[name="email"]');
      var label = email.siblings('label');
      var passwordname = $('#registro-curso input[name="password"]');
      var labelpass = passwordname.siblings('label');
      var password = $.trim(passwordname.val());
      var name = $('#registro-curso input[name="personal"]');
      var labelname = name.siblings('label');
      var personalname = $.trim(name.val());
      if(personalname== "") {
        name.addClass('error');
        labelname.show();
      } else {
        name.removeClass('error');
        labelname.hide();
      }
      if(validateEmail(email.val())) {
        email.removeClass('error');
        label.hide();
      } else {
        email.addClass('error');
        label.show();
      }
      if(password.length >= 4 && password.length <= 15) {
        passwordname.removeClass('error');
        labelpass.hide();
      } else {
        passwordname.addClass('error');
        labelpass.show();
      }
    });

$('.close').click(function(e) {
  $('.masc:visible').hide();
})
$('.show-login-curso').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #login-curso', function() {
    $('#login-curso').show();
    $('#login-curso button').click(function(e) {
      e.preventDefault();
      var email = $('#login-curso input[name="email"]');
      var label = email.siblings('label');
      var passwordname = $(' #login-curso input[name="password"]');
      var labelpass = passwordname.siblings('label');
      var password = $.trim(passwordname.val());
      if(validateEmail(email.val())) {
        email.removeClass('error');
        label.hide();
      } else {
        email.addClass('error');
        label.show();
      }
      if(password.length >= 4 && password.length <= 15) {
        passwordname.removeClass('error');
        labelpass.hide();
      } else {
        passwordname.addClass('error');
        labelpass.show();
      }

    });
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })
    $('.show-registro-curso').click(function(e) {
      e.preventDefault();
      $('#popup').load('popups.html #registro-curso', function() {
        $('#registro-curso').show();
        $('#registro-curso button').click(function(e) {
          e.preventDefault();
          var email = $('#registro-curso input[name="email"]');
          var label = email.siblings('label');
          var passwordname = $('#registro-curso input[name="password"]');
          var labelpass = passwordname.siblings('label');
          var password = $.trim(passwordname.val());
          var name = $('#registro-curso input[name="personal"]');
          var labelname = name.siblings('label');
          var personalname = $.trim(name.val());
          if(personalname== "") {
            name.addClass('error');
            labelname.show();
          } else {
            name.removeClass('error');
            labelname.hide();
          }
          if(validateEmail(email.val())) {
            email.removeClass('error');
            label.hide();
          } else {
            email.addClass('error');
            label.show();
          }
          if(password.length >= 4 && password.length <= 15) {
            passwordname.removeClass('error');
            labelpass.hide();
          } else {
            passwordname.addClass('error');
            labelpass.show();
            
          }
        });
$('.close').click(function(e) {
  $('.masc:visible').hide();
})
$('.show-gracias-curso').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #gracias-curso', function() {
    $('#gracias-curso').show();
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })

  })
})
})
})
})
})
})
})
});
});
$('.publicar-duda').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #publicar-duda', function() {
    $('#publicar-duda').show();
    $('#publicar-duda button').click(function(e) {
      e.preventDefault();
      var message = $('#publicar-duda input[name="description"]');
      var labelmessage = message.siblings('label');
      var textmessage = $.trim(message.val());
      var check = $('#publicar-duda input[name="check"]');
      var labelcheck = check.siblings('label');
      var checkname= $.trim(check.val());
      var title = $('#publicar-duda input[name="title"]');
      var labeltitle = title.siblings('label');
      var titlename= $.trim(title.val());
      var select = $('#publicar-duda input[name="select"]');
      var labelselect = select.siblings('label');
      var selectname= $.trim(select.val());
      if(textmessage == "") {
        message.addClass('error');
        labelmessage.show();
      } else {
        message.removeClass('error');
        labelmessage.hide();
      }
      if(titlename == "") {
        title.addClass('error');
        labeltitle.show();
      } else {
        title.removeClass('error');
        labeltitle.hide();
      }
      if(checkname.checked=="false") {
        check.addClass('error');
        labelcheck.show();
      } else {
        check.removeClass('error');
        labelcheck.hide();
      }
      if(selectname.value =="") {
        select.addClass('error');
        labelselect.show();
      } else {
        select.removeClass('error');
        labelselect.hide();
      }
    });
$('.close').click(function(e){
  $('.masc:visible').hide();
});
$('.show-registro-duda').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #registro-duda', function() {
    $('#registro-duda').show();
    $('#registro-duda button').click(function(e) {
      e.preventDefault();
      var email = $('#registro-duda input[name="email"]');
      var label = email.siblings('label');
      var passwordname = $('#registro-duda input[name="password"]');
      var labelpass = passwordname.siblings('label');
      var password = $.trim(passwordname.val());
      var name = $('#registro-duda input[name="personal"]');
      var labelname = name.siblings('label');
      var personalname = $.trim(name.val());
      if(personalname== "") {
        name.addClass('error');
        labelname.show();
      } else {
        name.removeClass('error');
        labelname.hide();
      }
      if(validateEmail(email.val())) {
        email.removeClass('error');
        label.hide();
      } else {
        email.addClass('error');
        label.show();
      }
      if(password.length >= 4 && password.length <= 15) {
        passwordname.removeClass('error');
        labelpass.hide();
      } else {
        passwordname.addClass('error');
        labelpass.show();
      }
    });
$('.close').click(function(e) {
  $('.masc:visible').hide();
})
$('.show-login-duda').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #login-duda', function() {
    $('#login-duda').show();
    $('#login-duda button').click(function(e) {
      e.preventDefault();
      var email = $('#login-duda input[name="email"]');
      var label = email.siblings('label');
      var passwordname = $(' #login-duda input[name="password"]');
      var labelpass = passwordname.siblings('label');
      var password = $.trim(passwordname.val());
      if(validateEmail(email.val())) {
        email.removeClass('error');
        label.hide();
      } else {
        email.addClass('error');
        label.show();
      }
      if(password.length >= 4 && password.length <= 15) {
        passwordname.removeClass('error');
        labelpass.hide();
      } else {
        passwordname.addClass('error');
        labelpass.show();
      }
    });
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })
    $('.show-registro-duda').click(function(e) {
      e.preventDefault();
      $('#popup').load('popups.html #registro-duda', function() {
        $('#registro-duda').show();
        $('#registro-duda button').click(function(e) {
          e.preventDefault();
          var email = $('#registro-duda input[name="email"]');
          var label = email.siblings('label');
          var passwordname = $('#registro-duda input[name="password"]');
          var labelpass = passwordname.siblings('label');
          var password = $.trim(passwordname.val());
          var name = $('#registro-duda input[name="personal"]');
          var labelname = name.siblings('label');
          var personalname = $.trim(name.val());
          if(personalname== "") {
            name.addClass('error');
            labelname.show();
          } else {
            name.removeClass('error');
            labelname.hide();
          }
          if(validateEmail(email.val())) {
            email.removeClass('error');
            label.hide();
          } else {
            email.addClass('error');
            label.show();
          }
          if(password.length >= 4 && password.length <= 15) {
            passwordname.removeClass('error');
            labelpass.hide();
          } else {
            passwordname.addClass('error');
            labelpass.show();
          }
        });
$('.close').click(function(e) {
  $('.masc:visible').hide();
})
$('.show-gracias-duda').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #gracias-duda', function() {
    $('#gracias-duda').show();
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })

  })
})
})
})
})
})
})
})
});
});
$('.contactar').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #contactar', function() {
    $('#contactar').show();
    $('#contactar button').click(function(e) {
      e.preventDefault();
      var message = $('#contactar textarea[name="message"]');
      var labelmessage = message.siblings('label');
      var textmessage = $.trim(message.val());
      var check = $('#contactar input[name="check"]');
      var labelcheck = check.siblings('label');
      var checkname= $.trim(check.val());
      if(textmessage == "") {
        message.addClass('error');
        labelmessage.show();
      } else {
        message.removeClass('error');
        labelmessage.hide();
      }
      if(checkname.checked=="false") {
        check.addClass('error');
        labelcheck.show();
      } else {
        check.removeClass('error');
        labelcheck.hide();
      }
    });
    $('.close').click(function(e){
      $('.masc:visible').hide();
    });
    $('.show-registro-contactar').click(function(e) {
      e.preventDefault();
      $('#popup').load('popups.html #registro-contactar', function() {
        $('#registro-contactar').show();
        $('#registro-contactar button').click(function(e) {
          e.preventDefault();
          var email = $('#registro-contactar input[name="email"]');
          var label = email.siblings('label');
          var passwordname = $('#registro-contactar input[name="password"]');
          var labelpass = passwordname.siblings('label');
          var password = $.trim(passwordname.val());
          var name = $('#registro-contactar input[name="personal"]');
          var labelname = name.siblings('label');
          var personalname = $.trim(name.val());
          if(personalname== "") {
            name.addClass('error');
            labelname.show();
          } else {
            name.removeClass('error');
            labelname.hide();
          }
          if(validateEmail(email.val())) {
            email.removeClass('error');
            label.hide();
          } else {
            email.addClass('error');
            label.show();
          }
          if(password.length >= 4 && password.length <= 15) {
            passwordname.removeClass('error');
            labelpass.hide();
          } else {
            passwordname.addClass('error');
            labelpass.show();
          }
        });
$('.close').click(function(e) {
  $('.masc:visible').hide();
})
$('.show-gracias-contactar').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #gracias-contactar', function() {
    $('#gracias-contactar').show();
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })
    $('.show-login-contactar').click(function(e) {
      e.preventDefault();
      $('#popup').load('popups.html #login-contactar', function() {
        $('#login-contactar').show();
        $('#login-contactar button').click(function(e) {
          e.preventDefault();
          var email = $('#login-contactar input[name="email"]');
          var label = email.siblings('label');
          var passwordname = $(' #login-contactar input[name="password"]');
          var labelpass = passwordname.siblings('label');
          var password = $.trim(passwordname.val());
          if(validateEmail(email.val())) {
            email.removeClass('error');
            label.hide();
          } else {
            email.addClass('error');
            label.show();
          }
          if(password.length >= 4 && password.length <= 15) {
            passwordname.removeClass('error');
            labelpass.hide();
          } else {
            passwordname.addClass('error');
            labelpass.show();
          }
        });
        $('.close').click(function(e) {
          $('.masc:visible').hide();
        })
        $('.show-registro-contactar').click(function(e) {
          e.preventDefault();
          $('#popup').load('popups.html #registro-contactar', function() {
            $('#registro-contactar').show();
            $('#registro-contactar button').click(function(e) {
              e.preventDefault();
              var email = $('#registro-contactar input[name="email"]');
              var label = email.siblings('label');
              var passwordname = $('#registro-contactar input[name="password"]');
              var labelpass = passwordname.siblings('label');
              var password = $.trim(passwordname.val());
              var name = $('#registro-contactar input[name="personal"]');
              var labelname = name.siblings('label');
              var personalname = $.trim(name.val());
              if(personalname== "") {
                name.addClass('error');
                labelname.show();
              } else {
                name.removeClass('error');
                labelname.hide();
              }
              if(validateEmail(email.val())) {
                email.removeClass('error');
                label.hide();
              } else {
                email.addClass('error');
                label.show();
              }
              if(password.length >= 4 && password.length <= 15) {
                passwordname.removeClass('error');
                labelpass.hide();
              } else {
                passwordname.addClass('error');
                labelpass.show();
              }
            });
$('.close').click(function(e) {
  $('.masc:visible').hide();
})
$('.show-gracias-contactar').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #gracias-contactar', function() {
    $('#gracias-contactar').show();
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })
  })
})
})
})
})
})
})
})
})
})
});
});
$('.publicar-curso2').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #publicar-curso-2', function() {
    $('#publicar-curso-2').show();
    $('#publicar-curso-2 button').click(function(e) {
      e.preventDefault();
      var message = $('#publicar-curso-2 input[name="description"]');
      var labelmessage = message.siblings('label');
      var textmessage = $.trim(message.val());
      var check = $('#publicar-curso-2 input[name="check"]');
      var labelcheck = check.siblings('label');
      var checkname= $.trim(check.val());
      var title = $('#publicar-curso-2 input[name="title"]');
      var labeltitle = title.siblings('label');
      var titlename= $.trim(title.val());
      var select = $('#publicar-curso-2 input[name="select"]');
      var labelselect = select.siblings('label');
      var selectname= $.trim(select.val());
      if(textmessage == "") {
        message.addClass('error');
        labelmessage.show();
      } else {
        message.removeClass('error');
        labelmessage.hide();
      }
      if(titlename == "") {
        title.addClass('error');
        labeltitle.show();
      } else {
        title.removeClass('error');
        labeltitle.hide();
      }
      if(checkname.checked=="false") {
        check.addClass('error');
        labelcheck.show();
      } else {
        check.removeClass('error');
        labelcheck.hide();
      }
      if(selectname.value =="") {
        select.addClass('error');
        labelselect.show();
      } else {
        select.removeClass('error');
        labelselect.hide();
      }
    });
$('.close').click(function(e){
  $('.masc:visible').hide();
});
$('.abrir-consejos').click(function(e){
  $('.show-consejos').show();
  $('.hide-consejos').hide();
  return false;
});
$('.cerrar-consejos').click(function(e){
  $('.show-consejos').hide();
  $('.hide-consejos').show();
  return false;
});
$('.show-gracias-curso2').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #gracias-curso-2', function() {
    $('#gracias-curso-2').show();
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })
  })
})
});
});
$('.publicar-duda2').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #publicar-duda-2', function() {
    $('#publicar-duda-2').show();
    $('#publicar-duda-2 button').click(function(e) {
      e.preventDefault();
      var message = $('#publicar-duda-2 input[name="description"]');
      var labelmessage = message.siblings('label');
      var textmessage = $.trim(message.val());
      var check = $('#publicar-duda-2 input[name="check"]');
      var labelcheck = check.siblings('label');
      var checkname= $.trim(check.val());
      var title = $('#publicar-duda-2 input[name="title"]');
      var labeltitle = title.siblings('label');
      var titlename= $.trim(title.val());
      var select = $('#publicar-duda-2 input[name="select"]');
      var labelselect = select.siblings('label');
      var selectname= $.trim(select.val());
      if(textmessage == "") {
        message.addClass('error');
        labelmessage.show();
      } else {
        message.removeClass('error');
        labelmessage.hide();
      }
      if(titlename == "") {
        title.addClass('error');
        labeltitle.show();
      } else {
        title.removeClass('error');
        labeltitle.hide();
      }
      if(checkname.checked=="false") {
        check.addClass('error');
        labelcheck.show();
      } else {
        check.removeClass('error');
        labelcheck.hide();
      }
      if(selectname.value =="") {
        select.addClass('error');
        labelselect.show();
      } else {
        select.removeClass('error');
        labelselect.hide();
      }
    });
$('.close').click(function(e){
  $('.masc:visible').hide();
});
$('.show-gracias-duda2').click(function(e) {
  e.preventDefault();
  $('#popup').load('popups.html #gracias-duda-2', function() {
    $('#gracias-duda-2').show();
    $('.close').click(function(e) {
      $('.masc:visible').hide();
    })
  })
})
});
});
$('.contactar-2').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #contactar-2', function() {
    $('#contactar-2').show();
    $('#contactar-2 button').click(function(e) {
      e.preventDefault();
      var message = $('#contactar-2 textarea[name="message"]');
      var labelmessage = message.siblings('label');
      var textmessage = $.trim(message.val());
      var check = $('#contactar-2 input[name="check"]');
      var labelcheck = check.siblings('label');
      var checkname= $.trim(check.val());
      if(textmessage == "") {
        message.addClass('error');
        labelmessage.show();
      } else {
        message.removeClass('error');
        labelmessage.hide();
      }
      if(checkname.checked=="false") {
        check.addClass('error');
        labelcheck.show();
      } else {
        check.removeClass('error');
        labelcheck.hide();
      }
    });
    $('.close').click(function(e){
      $('.masc:visible').hide();
    });
    $('.show-gracias-contactar2').click(function(e) {
      e.preventDefault();
      $('#popup').load('popups.html #gracias-contactar-2', function() {
        $('#gracias-contactar-2').show();
        $('.close').click(function(e) {
          $('.masc:visible').hide();
        })
      })
    })
  });
});
$('.modificar-curso').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #modificar-curso', function() {
    $('#modificar-curso').show();
    $('#modificar-curso button').click(function(e) {
      e.preventDefault();
      var message = $('#modificar-curso input[name="description"]');
      var labelmessage = message.siblings('label');
      var textmessage = $.trim(message.val());
      var check = $('#modificar-curso input[name="check"]');
      var labelcheck = check.siblings('label');
      var checkname= $.trim(check.val());
      var title = $('#modificar-curso input[name="title"]');
      var labeltitle = title.siblings('label');
      var titlename= $.trim(title.val());
      var select = $('#modificar-curso input[name="select"]');
      var labelselect = select.siblings('label');
      var selectname= $.trim(select.val());
      if(textmessage == "") {
        message.addClass('error');
        labelmessage.show();
      } else {
        message.removeClass('error');
        labelmessage.hide();
      }
      if(titlename == "") {
        title.addClass('error');
        labeltitle.show();
      } else {
        title.removeClass('error');
        labeltitle.hide();
      }
      if(checkname.checked=="false") {
        check.addClass('error');
        labelcheck.show();
      } else {
        check.removeClass('error');
        labelcheck.hide();
      }
      if(selectname.value =="") {
        select.addClass('error');
        labelselect.show();
      } else {
        select.removeClass('error');
        labelselect.hide();
      }
    });
$('.close').click(function(e){
  $('.masc:visible').hide();
});
});
});
$('.valorar').click(function(e){
  e.preventDefault();
  $('#popup').load('popups.html #valorar', function() {
    $('#valorar').show();
    $('.close').click(function(e){
      $('.masc:visible').hide();
    });
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
  });
});
})
/*scroll*/
jQuery(document).ready(function() {
  var offset = 900;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});