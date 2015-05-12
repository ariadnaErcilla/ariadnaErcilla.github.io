$(document).ready(function(){

$('a.reciente').click(function(e) {
        e.preventDefault();
        tinysort('ul.anuncios>li',{data:'reciente', order:'desc'});
      });

      $('a.popular').click(function(e) {
        e.preventDefault();
        tinysort('ul.anuncios>li',{data:'popularidad', order:'desc'});
      });
      $('a.puntuado').click(function(e) {
        e.preventDefault();
        tinysort('ul.anuncios>li',{data:'puntuacion', order:'desc'});
      });

 })

/*$('.reciente').click(function(e) {
        $('.reciente').addClass('selection');
        $('.menu-ordenar a:not(.reciente').removeClass('selection');
      });

      $('a.popular').click(function(e) {
        $('.popular').addClass('selection');
        $('.menu-ordenar a:not(.popular').removeClass('selection');
      });
      $('.puntuado').click(function(e) {
        $('.puntuado').addClass('selection');
        $('.menu-ordenar a:not(.puntuado').removeClass('selection');
      });

 })
 */