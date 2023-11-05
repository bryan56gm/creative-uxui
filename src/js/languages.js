const languageElement = document.getElementById('main-menu-language');
const textsToChange = document.querySelectorAll('[data-section]');
const selectedLanguage = localStorage.getItem('selected-language');


const changeLanguage = async language => {
    const requestJson = await fetch(`/portfolio/assets/languages/${language}.json`);
    // const requestJson = await fetch(`/assets/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

    // Cambia la bandera segun el lenguage seleccionado 
    const flag = document.getElementById("flag");

    if (language == "en") {
        flag.setAttribute("src", "/portfolio/assets/icons/flag-eng.svg")
    } else {
        flag.setAttribute("src", "/portfolio/assets/icons/flag-spn.svg")
    }
}


languageElement.addEventListener('click', (e) => {
    const clickedElement = e.target;

    // Comprueba si se hizo clic en un elemento 'li' o en cualquiera de sus descendientes
    const liElement = clickedElement.closest('[data-language]');
    if (liElement) {
        const selectedLanguage = liElement.dataset.language;
        changeLanguage(selectedLanguage);

        // Guarda el idioma seleccionado por el usuario
        localStorage.setItem('selected-language', selectedLanguage);
    }
});


// Validate if the user previously chose a topic
if (selectedLanguage) changeLanguage(selectedLanguage)
else (navigator.language.split('-')[0] == 'es') ? changeLanguage('es') : changeLanguage('en');
