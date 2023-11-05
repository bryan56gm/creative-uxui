/*=============== SHOW MENU ===============*/
const showMenu = (menu, toggle) => {
    // Add or remove the class that displays the menu
    menu.classList.toggle('show');
    // Add or remove the cross-toggle animation class 
    toggle.classList.toggle('toggle-menu--cross');
}


/*=============== CLOSE OUTSIDE MENU  ===============*/
const closeOutside = (e, menu, toggle) => {

    if (!e.target.classList.contains("header")
        && !e.target.classList.contains("nav")
        && !e.target.classList.contains("show")
        && !e.target.classList.contains("toggle-menu")
        && !e.target.classList.contains("toggle-menu__icon")
    ) {

        menu.classList.remove('show');
        toggle.classList.remove('toggle-menu--cross');
    }
}

