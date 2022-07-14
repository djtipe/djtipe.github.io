document.addEventListener('DOMContentLoaded',() => {
    const burger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeMenu = document.querySelector('.menu__close');
          
    function toggleMenu(selectedElement) {
        selectedElement.addEventListener('click', function() {
            menu.classList.toggle('menu_show');
        });
    }

    toggleMenu(burger);
    toggleMenu(closeMenu);

});
