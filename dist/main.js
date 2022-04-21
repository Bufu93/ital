// burger menu
const burgerBody = document.querySelector('#burger-body');
const burgerBtn = document.querySelector('#burger-btn');
const burgerIcon = document.querySelector('#burger-icon');


burgerBtn.addEventListener('click', () => {
    burgerBody.classList.toggle('hidden')
    if(!burgerBody.classList.contains('hidden')) {
        burgerIcon.classList.add('rotate-180');
    }else {
        burgerIcon.classList.remove('rotate-180');
    }
})
// burger menu-end

// Dropdown footer menu
const footerDrop = document.querySelector('#footer-drop');
const footerList = document.querySelector('#footer-list');
const footerPlus = document.querySelector('#footer-plus');

footerDrop.addEventListener('click', () => {
    footerList.classList.toggle('hidden');
    footerList.classList.toggle('translate-y-[-100%]')
    if(!footerList.classList.contains('hidden')) {
        footerPlus.innerHTML = '-';
    }else {
        footerPlus.innerHTML = '+';
    }
})
// Dropdown footer menu-end