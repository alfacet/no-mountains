    $('.btn').click(function() {
        $('.btn').toggleClass("click");
        $('.sidebar').toggleClass("show");
    });

    $('.relv-btn').click(function() {
        $('nav ul .relv-mostrar').toggleClass("show");
        $('nav ul .relv').toggleClass("rotate");
    });

    $('nav ul li').click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });