/*mensajeria*/
$(document).ready(function(){
$('.pestanya-m-no-leido').click(function() {
    $('.option-recibido').hide();
    $('.option-no-leido').show();
    $('.option-enviado').hide();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-no-leido').addClass('seleccionado-m');
    return false;
});
$('.pestanya-m-enviado').click(function() {
    $('.option-recibido').hide();
    $('.option-no-leido').hide();
    $('.option-enviado').show();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-enviado').addClass('seleccionado-m');
    return false;
});
$('.pestanya-m-recibido').click(function() {
    $('.option-recibido').show();
    $('.option-no-leido').hide();
    $('.option-enviado').hide();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-recibido').addClass('seleccionado-m');
    return false;
});
 $(".mensaje-leido").click(function () {
     $('.mensaje-desplegado').fadeToggle("fast");
    });
})