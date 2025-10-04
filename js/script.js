const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const headerPanel = document.querySelector(".header__panel");
const closeButton = document.querySelector(".close");

burger.addEventListener("click", () => {
    document.body.classList.add('stop-scroll');
    overlay.classList.add('overlay--active');
    headerPanel.classList.add('active');
    closeButton.classList.add('close--active');
});

closeButton.addEventListener("click", () => {
    document.body.classList.remove('stop-scroll');
    overlay.classList.remove('overlay--active');
    headerPanel.classList.remove('active');
})

overlay.addEventListener("click", () => {
    document.body.classList.remove('stop-scroll');
    overlay.classList.remove('overlay--active');
    headerPanel.classList.remove('active');
});