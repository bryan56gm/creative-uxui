let mainLocation = scrollY;

const scrollHeader = () => {
    const header = document.getElementById('header');
    const menu = document.getElementById('main-menu');
    let currentLocation = scrollY;

    getLocationScroll(currentLocation, header, menu);
}

const getLocationScroll = (currentLocation, header, menu) => {
    //Cumplira la condición cuando currentLocation sea menor a la altura indicada.
    if (currentLocation >= 300) {
        //Si el menu contiene la clase show (en la versión movil cuando se muestra al hacer click al toggle) o...
        (mainLocation >= currentLocation || menu.classList.contains('show')) ?
            header.classList.remove('show') : header.classList.add('show')
    }
    mainLocation = currentLocation;
}