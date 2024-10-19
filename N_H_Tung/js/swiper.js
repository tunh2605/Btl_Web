const swiper_main = new Swiper('.swiper-main', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1800,
    autoplay: {
        delay: 3000,
    },
});

const film_main = new Swiper('.film-main', {
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    speed: 500,
    freeMode: true, 
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1.,
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
    }
});

