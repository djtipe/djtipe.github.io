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

    const progressItems = document.querySelectorAll('.skills__level-item');
    progressItems.forEach(function(element) {
        const level = element.querySelector('.skills__level-item__level').innerHTML;
        element.querySelector('.skills__level-item__progress_done').style = (`width: +${level}`);
    })

});
