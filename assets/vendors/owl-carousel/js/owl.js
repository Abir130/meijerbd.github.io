$('.shopowlcarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})