const getToggle = document.querySelector(".nav-toggle input");
const getNav = document.querySelector("ul.nav-menu");

getToggle.addEventListener('click', () => {
    getNav.classList.toggle('active');
});