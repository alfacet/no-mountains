    $('.btn').click(function() {
        $('.btn').toggleClass("click");
        $('.sidebar').toggleClass("show");
    });

    /*Parte Um*/

    $('.relv-btn').click(function() {
        $('nav ul .relv-mostrar').toggleClass("show");
        $('nav ul .relv').toggleClass("rotate");
    });

    /*Parte Dois*/

    $('nav ul li').click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    /*Parte Três*/