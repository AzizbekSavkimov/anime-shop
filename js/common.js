$(document).ready(function(){
    $('.header__slider').slick({
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    adaptiveHeight: true
                }
            },
        ]
    });
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        if(height > 20){
            $('nav').addClass('header__white');
        } else{
            $('nav').removeClass('header__white');
        }
    });

    let listElement = $('.navbar li');
    let offset = $('.navbar').outerHeight();

    listElement.find('a[href^="#"]').click(function(event) {
        event.preventDefault();
        let anchorId = $(this).attr("href");
        let target = 0;

        $('.navbar__list li a').each(function () {
            $(this).removeClass('active')
        })
        $(this).addClass('active');


        if (anchorId.length > 1 && $(anchorId).length > 0) {
            target = $(anchorId).offset().top - offset;
        } else {
            target = 0;
        }

        $('html, body').animate({ scrollTop: target}, 500, function () {
            window.location.hash = '';
        });

    });

    $('.navbar__logo').click(function () {
        $('html, body').animate({ scrollTop: 0}, 800);
        return false;
    });

});

