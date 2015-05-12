$(document).ready(function(){

$('.categoria-arquitectura').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.arquitectura)').hide();
        $('.anuncios li.arquitectura').show();
        $('.categoria-arquitectura').addClass('select');
        $('.lista-categorias a:not(.categoria-arquitectura').removeClass('select');
      });
      $('.categoria-animacion').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.animacion)').hide();
        $('.anuncios li.animacion').show();
        $('.categoria-animacion').addClass('select');
        $('.lista-categorias a:not(.categoria-animacion').removeClass('select');
      });
      $('.categoria-audiovisual').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.audiovisual)').hide();
        $('.anuncios li.audiovisual').show();
        $('.categoria-audiovisual').addClass('select');
        $('.lista-categorias a:not(.categoria-audiovisual').removeClass('select');
      });
      $('.categoria-industrial').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.industrial)').hide();
        $('.anuncios li.industrial').show();
        $('.categoria-industrial').addClass('select');
        $('.lista-categorias a:not(.categoria-industrial').removeClass('select');
      });
      $('.categoria-grafico').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.grafico)').hide();
        $('.anuncios li.grafico').show();
        $('.categoria-grafico').addClass('select');
        $('.lista-categorias a:not(.categoria-grafico').removeClass('select');
      });
      $('.categoria-moda').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.moda)').hide();
        $('.anuncios li.moda').show();
        $('.categoria-moda').addClass('select');
        $('.lista-categorias a:not(.categoria-moda').removeClass('select');
      });
      $('.categoria-web').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.web)').hide();
        $('.anuncios li.web').show();
        $('.categoria-web').addClass('select');
        $('.lista-categorias a:not(.categoria-web').removeClass('select');
      });
      $('.categoria-fotografia').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.fotografia)').hide();
        $('.anuncios li.fotografia').show();
        $('.categoria-fotografia').addClass('select');
        $('.lista-categorias a:not(.categoria-fotografia').removeClass('select');
      });
      $('.categoria-programacion').click(function(e){
        e.preventDefault();
        $('.anuncios li:not(.programacion)').hide();
        $('.anuncios li.programacion').show();
        $('.categoria-programacion').addClass('select');
        $('.lista-categorias a:not(.categoria-programacion').removeClass('select');
      });

  })



