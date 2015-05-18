$(document).ready(function(){

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

  })



