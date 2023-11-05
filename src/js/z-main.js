const main = () => {
    const menu = document.getElementById('main-menu');
    const toggle = document.getElementById('toggle-menu');

    /*=============== MENU ===============*/
    /*========== Show menu ==========*/
    toggle.addEventListener('click', () => showMenu(menu, toggle));
    /*========== Close outside menu  ==========*/
    document.addEventListener('click', (e) => closeOutside(e, menu, toggle));

    /*=============== HEADER - SCROLL ===============*/
    window.addEventListener('scroll', scrollHeader);

}



document.addEventListener('DOMContentLoaded', main);