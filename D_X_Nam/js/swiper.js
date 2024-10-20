const film_main = new Swiper('.film-main', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    speed: 500,
    freeMode: true, 
    loopFillGroupWithBlank: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        789:{
            slidesPerView: 3,
        }
    },
    autoplay: {
        delay: 3000,
    },
});

