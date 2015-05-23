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
            $('.show-registro-curso').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #registro-curso', function() {
                $('#registro-curso').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
              $('.show-login-curso').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #login-curso', function() {
                $('#login-curso').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
              $('.show-gracias-curso').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #gracias-curso', function() {
                $('#gracias-curso').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
        });
        
      });
      $('.publicar-duda').click(function(e){
        e.preventDefault();
        $('#popup').load('popups.html #publicar-duda', function() {
            $('#publicar-duda').show();
            $('.close').click(function(e){
                $('.masc:visible').hide();
            });
            $('.show-registro-duda').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #registro-duda', function() {
                $('#registro-duda').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
              $('.show-login-duda').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #login-duda', function() {
                $('#login-duda').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
              $('.show-gracias-curso').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #gracias-duda', function() {
                $('#gracias-duda').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
        });
        
      });
    $('.contactar').click(function(e){
        e.preventDefault();
        $('#popup').load('popups.html #contactar', function() {
            $('#contactar').show();
            $('.close').click(function(e){
                $('.masc:visible').hide();
            });
            $('.show-registro-contactar').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #registro-contactar', function() {
                $('#registro-contactar').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
              $('.show-login-contactar').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #login-contactar', function() {
                $('#login-contactar').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
              $('.show-gracias-contactar').click(function(e) {
              e.preventDefault();

              $('#popup').load('popups.html #gracias-contactar', function() {
                $('#gracias-contactar').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
              })
        });
        
      });
      $('.modificar-curso').click(function(e){
        e.preventDefault();
        $('#popup').load('popups.html #modificar-curso', function() {
            $('#modificar-curso').show();
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
           
        });
        
      });

  })