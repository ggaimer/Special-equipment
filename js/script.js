// burger menu

const burger = document.querySelector('.burger')
const overlay = document.querySelector('.overlay')
const headerPanel = document.querySelector(".header__panel")
const closeButton = document.querySelector(".close")

burger.addEventListener("click", () => {
    document.body.classList.add('stop-scroll')
    overlay.classList.add('overlay--active')
    headerPanel.classList.add('active')
    closeButton.classList.add('close--active')
})

closeButton.addEventListener("click", () => {
    document.body.classList.remove('stop-scroll')
    overlay.classList.remove('overlay--active')
    headerPanel.classList.remove('active')
})

overlay.addEventListener("click", () => {
    document.body.classList.remove('stop-scroll')
    overlay.classList.remove('overlay--active')
    headerPanel.classList.remove('active')
})


// file-upload

const fileInputs = document.querySelectorAll('.form__file-input')

fileInputs.forEach(input => {
    input.addEventListener('change', () => {
        const label = document.querySelector(`label[for="${input.id}"]`)
        const textEl = label.querySelector('.form__attach-text')

        textEl.textContent = input.files.length > 0
            ? input.files[0].name
            : 'Прикрепить файл'
    })
})


// swiper

const swiperServices = new Swiper('.swiper.swiper--services', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper--services .swiper-pagination',
        type: 'progressbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
})

const swiperServicesCycle = new Swiper('.swiper.swiper--services-cycle', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
            allowTouchMove: false,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
            allowTouchMove: false,
        },
        980: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    },
    watchOverflow: true,
})

const swiper = new Swiper('.swiper.swiper--insights', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 3,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
    }
})


// accordion

const accordionButtons = document.querySelectorAll('.accordion__top')
const accordionContent = document.querySelector('.accordion__content')

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.accordion')
        parent.classList.toggle('active')
    })
})
