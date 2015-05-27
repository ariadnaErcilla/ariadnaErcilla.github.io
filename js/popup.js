$(document).ready(function(){
 /*forms-errors*/   
function validateEmail(sEmail) {
              var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
              if (filter.test(sEmail))
                  return true;
              else
                  return false;
          }

    $('#login button').click(function(e) {
            e.preventDefault();
            var email = $('input[name="email"]');
            var label = email.siblings('label');
            var passwordname = $('input[name="password"]');
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

$('#registro button').click(function(e) {
            e.preventDefault();
            var email = $('input[name="email"]');
            var label = email.siblings('label');
            var passwordname = $('input[name="password"]');
            var labelpass = passwordname.siblings('label');
            var password = $.trim(passwordname.val());
            var name = $('input[name="personal"]');
            var labelname = name.siblings('label');
            var personalname = $.trim(name.val());
            if(personalname.length >= 4 && personalname.length <= 15) {
              name.removeClass('error');
              labelname.hide();
            } else {
              name.addClass('error');
              labelname.show();
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
  /*show-consejos*/
$('#abrir-consejos').click(function(e){
        $('.show-consejos').show();
        $('.hide-consejos').hide();
        return false;
    });

$('#cerrar-consejos').click(function(e){
        $('.show-consejos').hide();
        $('.hide-consejos').show();
        return false;
    });
/*links-popups*/
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
             })
        $('.show-login-curso').click(function(e) {
              e.preventDefault();
              $('#popup').load('popups.html #login-curso', function() {
                $('#login-curso').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
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
               })
              $('.show-login-duda').click(function(e) {
              e.preventDefault();
              $('#popup').load('popups.html #login-duda', function() {
                $('#login-duda').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
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
              })
              $('.show-login-contactar').click(function(e) {
              e.preventDefault();
              $('#popup').load('popups.html #login-contactar', function() {
                $('#login-contactar').show();
                $('.close').click(function(e) {
                  $('.masc:visible').hide();
                })
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

 })