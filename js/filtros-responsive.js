  
$(document).ready(function(){

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
})