 $(document).ready(function(){
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

})