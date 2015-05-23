$(document).ready(function(){
    
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


 })