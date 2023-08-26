const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const ItemMenu = document.querySelectorAll('.item-menu');
let isMenuOpen = false;

function unselectItems() {
    ItemMenu.forEach((item) => item.classList.remove('ativo'));
}

function openMenuWithEnter(event) {
    if (event.key === 'Enter') {
        toggleMenu(event);
    }
}

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        isMenuOpen = true;
        icons.forEach(icon => icon.classList.remove('icon-closed')); // Remover classe para ícones não clicáveis
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        isMenuOpen = false;
        unselectItems();
        icons.forEach(icon => icon.classList.add('icon-closed')); // Adicionar classe para ícones não clicáveis
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
btnMobile.addEventListener('keydown', openMenuWithEnter);


ItemMenu.forEach((item) =>
    item.addEventListener('click', selectLink)
);


function selectLink() {
    const isAlreadySelected = this.classList.contains('ativo');

    unselectItems();

    if (!isAlreadySelected) {
        this.classList.add('ativo');
    }
}

document.addEventListener('click', function (event) {
    const target = event.target;
    if (!nav.contains(target) && target !== btnMobile) {
        unselectItems();
    }
});