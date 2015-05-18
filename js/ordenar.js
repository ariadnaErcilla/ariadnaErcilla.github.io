$(document).ready(function(){

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

 })

