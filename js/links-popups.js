$(document).ready(function(){

$('.login').click(function(e){
        e.preventDefault();
        $('#popup').load('popups.html #login', function() {
            $('#login').show();
            $('.close').click(function(e){
                $('.masc:visible').hide();
            });
        });
        
      });
      $('.registro').click(function(e){
        e.preventDefault();
        $('#popup').load('popups.html #registro', function() {
            $('#registro').show();
            $('.close').click(function(e){
                $('.masc:visible').hide();
            });
        });
        
      });
      $('.publicar-curso').click(function(e){
        e.preventDefault();
        $('#popup').load('popups.html #publicar-curso', function() {
            $('#publicar-curso').show();
            $('.close').click(function(e){
                $('.masc:visible').hide();
            });
        });
        
      });

  })