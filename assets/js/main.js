$(document).ready(function() {
    $(".navbar-toggle").click(function(e) {
        e.preventDefault();
        $("header.mobile").toggleClass("mobile-active");
    });

    // index faq settings
    $(".faq .faq-content").slideUp();
    $(".faq .faq-title").click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass("active");
        $(this).parent().children(".faq-content").slideToggle();
    });
    // index faq settings

    // policy faq settings
    $(".policy-faq .faq-content").slideUp();
    $(".policy-faq .faq-title").click(function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass("active")) {
            $(".policy-faq .faq-content").slideUp();
            $(".policy-faq").removeClass("active");
        }
        $(this).parent().toggleClass("active");
        $(this).parent().children(".faq-content").slideToggle();
    });
    // policy faq settings

    // lab faq settings
    $(".lab-faq .faq-content").slideUp();
    $(".lab-faq .faq-title").click(function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass("active")) {
            $(".lab-faq .faq-content").slideUp();
            $(".lab-faq").removeClass("active");
        }
        $(this).parent().toggleClass("active");
        $(this).parent().children(".faq-content").slideToggle();
    });
    // lab faq settings

    // hero faq top
    $(".hero-top-faq .faq-content").slideUp();
    $(".hero-top-faq .faq-title").click(function(e) {
        e.preventDefault();
        if (!$(this).parent().parent().hasClass("active")) {
            $(".hero-top-faq .faq-content").slideUp();
            $(".hero-top-faq").removeClass("active");
        }
        $(this).parent().parent().toggleClass("active");
        $(this).parent().children(".faq-content").slideToggle();
    });

    // Scroll bar reset and scrolling position code

    const mediaQuery = window.matchMedia('(max-width: 1000px)');
    $(document).scroll(function() {
        if (!mediaQuery.matches) {
            if (window.pageYOffset >= 50) {
                $("header").addClass("scrolled");
            } else {
                $("header").removeClass("scrolled");
            }
        }
    });

    // Hero faq top kısmını z indexle reverseleme 
    $($(".hero-top-faq").get().reverse()).each(function(index, element) {
        // element == this
        $(element).css("z-index", (index));
    });

    // iletisim map side animation
    var waypoints = $('#map').waypoint(function(direction) {
        console.log(direction);
        if (direction === "down") {
            $("#map .map-container").css("max-height", "0px");
        } else {
            $("#map .map-container").css("max-height", "300px");
        }
    }, {
        offset: '50%'
    });

});


// Swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".mys-button-next",
        prevEl: ".mys-button-prev",
    },
    breakpoints: {

        1000: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }

});


var highlightSwiper = new Swiper(".highlightSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {

        1000: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }

});

var fuarswiper = new Swiper(".fuarswiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".fuar-button-next",
        prevEl: ".fuar-button-prev",
    },
    breakpoints: {

        1000: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }

});

var references = new Swiper(".references", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".mys-button-next",
        prevEl: ".mys-button-prev",
    },
    breakpoints: {

        800: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }

});

var factory = new Swiper(".factorySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }

});

var team = new Swiper(".teamSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".mys-button-next",
        prevEl: ".mys-button-prev",
    },
    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    }
});

var klabSwiper = new Swiper(".klabSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".klab-button-next",
        prevEl: ".klab-button-prev",
    },
    breakpoints: {

        1000: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }

});

var medicalGaleriSwiper = new Swiper(".medicalGaleriSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".mys-button-next",
        prevEl: ".mys-button-prev",
    },
    breakpoints: {

        800: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1500: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    }

});

var kaynakcaSwiper = new Swiper(".kaynakcaSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".mys-button-next",
        prevEl: ".mys-button-prev",
    },
    breakpoints: {
      
        1000: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    }

});