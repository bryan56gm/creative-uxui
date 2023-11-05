const swiperFigma = new Swiper("#swiper-figma", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    keyboard: {
        enabled: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

const swiperIllustrator = new Swiper("#swiper-illustrator", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    keyboard: {
        enabled: true,
    },

    autoplay: {
        delay: 3700,
        disableOnInteraction: false,
    },
});

const swiperAbout = new Swiper(".about__swiper", {
    // grabCursor: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },



    breakpoints: {
        900: {
            slidesPerView: 3,
        },
    },










});
