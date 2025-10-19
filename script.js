const togglemenu = document.querySelector('#toggle-menu');
const menuList = document.querySelector('#menu-list');

togglemenu.addEventListener('click', function() {
    menuList.classList.toggle('active');
})