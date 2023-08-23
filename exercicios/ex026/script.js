const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const ItemMenu = document.querySelectorAll('.item-menu');
let isMenuOpen = false;

// Função para remover a classe "ativo" de todos os elementos do menu
function unselectItems() {
    ItemMenu.forEach((item) => item.classList.remove('ativo'));
}

// Função para abrir o menu com Enter
function openMenuWithEnter(event) {
    if (event.key === 'Enter') {
        toggleMenu(event);
    }
}

// Função para ativar ou desativar o menu
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        isMenuOpen = true;
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        isMenuOpen = false;
        unselectItems(); // Chama a função para remover a classe "ativo"
    }
}

// Adiciona os ouvintes de evento para o botão de menu
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
btnMobile.addEventListener('keydown', openMenuWithEnter);

// Adiciona ouvintes de evento para os itens do menu
ItemMenu.forEach((item) =>
    item.addEventListener('click', selectLink)
);

// Função para marcar ou desmarcar itens do menu
function selectLink() {
    const isAlreadySelected = this.classList.contains('ativo');

    unselectItems(); // Remove a classe "ativo" de todos os elementos do menu

    if (!isAlreadySelected) {
        this.classList.add('ativo');
    }
}

// Ouvinte de evento para clicar fora do menu e do botão de menu
document.addEventListener('click', function (event) {
    const target = event.target;
    if (!nav.contains(target) && target !== btnMobile) {
        unselectItems(); // Remove a classe "ativo" de todos os elementos do menu
    }
});