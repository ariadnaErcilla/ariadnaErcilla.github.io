/* Tablas*/
$(document).ready(function(){
$('td .icono-tabla-off').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-on').css({
        'display': 'block'
    });
});
$('td .icono-tabla-on').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-off').css({
        'display': 'block'
    });
});
})