/*--------
buscador
----------*/
$(document).ready(function(){
	
    $('#abrir').click(function(e){
        $('.buscador-desplegado').show();
        return false;
    });

    $('#cerrar').click(function(e){
        $('.buscador-desplegado').hide();
        return false;
    });
})

