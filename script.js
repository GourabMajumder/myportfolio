const ellipsis = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav-menu');
const menuItem = document.querySelector('.menu-item');

function toggle() {
    navMenu.classList.toggle('activate');
}

ellipsis.addEventListener('click', toggle);



Array.from(menuItem).forEach(function (item) {
    item.addEventListener('click', toggle)
});

