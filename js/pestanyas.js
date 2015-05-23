/*pestanyas*/
$(document).ready(function(){
$('.pestanya-2').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-2').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-2').addClass('seleccionado');
    return false;
});
$('.pestanya-3').click(function() {
    $('.option-1').hide();
    $('.option-2').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-3').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-3').addClass('seleccionado');
    return false;
});
$('.pestanya-4').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-4').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-4').addClass('seleccionado');
    return false;
});
$('.pestanya-5').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-6').hide();
    $('.option-5').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-5').addClass('seleccionado');
    return false;
});
$('.pestanya-6').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-6').addClass('seleccionado');
    return false;
});
$('.pestanya-1').click(function() {
    $('.option-2').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-1').addClass('seleccionado');
    return false;
});
})