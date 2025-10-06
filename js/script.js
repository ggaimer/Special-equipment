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

const fileInput = document.getElementById('file-upload')
const fileText = document.querySelector('.form__attach-text')

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileText.textContent = fileInput.files[0].name
    } else {
        fileText.textContent = 'Прикрепить файл'
    }
})


// swiper

let swiperFirst;
let swiperSecond;

function initSwipers() {
  const w = window.innerWidth;

  if (w >= 980) {
    if (!swiperFirst) {
      swiperFirst = new Swiper('.swiper-first', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-first-controls .swiper-button-next',
          prevEl: '.swiper-first-controls .swiper-button-prev',
        },
      });
    }

    if (!swiperSecond) {
      swiperSecond = new Swiper('.swiper-second', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-second-controls .swiper-button-next',
          prevEl: '.swiper-second-controls .swiper-button-prev',
        },
      });
    }
  } else {
    if (swiperFirst) {
      swiperFirst.destroy(true, true);
      swiperFirst = null;
    }
    if (swiperSecond) {
      swiperSecond.destroy(true, true);
      swiperSecond = null;
    }
  }
}

function debounce(fn, wait = 150) {
  let t;
  return function() {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait);
  };
}

initSwipers();
window.addEventListener('resize', debounce(initSwipers));