 /*scroll-funciona*/
 $(document).ready(function(){
 $('#scroll-to-cursos').click(function(e) {
                        e.preventDefault();
                        $(window).scrollTo($('#cursos'), 800);
                    });
                    $('#scroll-to-creativos').click(function(e) {
                        e.preventDefault();
                        $(window).scrollTo($('#creativos'), 800);
                    });
                    $('#scroll-to-dudas').click(function(e) {
                        e.preventDefault();
                        $(window).scrollTo($('#dudas'), 800);
                    })
})