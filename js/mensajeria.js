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
 $(".mensaje-1").click(function () {
    $('.mensaje-desplegado-1').fadeToggle("fast");
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-2").click(function () {
    $('.mensaje-desplegado-2').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-3").click(function () {
    $('.mensaje-desplegado-3').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-4").click(function () {
    $('.mensaje-desplegado-4').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-5").click(function () {
    $('.mensaje-desplegado-5').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    });
})