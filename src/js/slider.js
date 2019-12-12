var slider = tns({
    container: ".comments-slider",
    items: 1,
    gutter: 30,
    loop: false,
    mouseDrag: true,
    nav: false,
    swipeAngle: false,
    speed: 400,
    controlsPosition: 'top',
    responsive: {
        992: {
            items: 3,
        },
    },
    controlsText: ['<i class="icon-prevButton"></i>', '<i class="icon-nextButton"></i>'],

});