    /*Parte Um*/
    
    $('.btn').click(function() {
        $('.btn').toggleClass("click");
        $('nav').toggleClass("show");
    });

    /*Parte Dois*/

    $('.relv-btn').click(function() {
        $('nav ul .relv-mostrar').toggleClass("show");
        $('nav ul .relv').toggleClass("rotate");
    });

    /*Parte Três*/

    $('nav ul li').click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
