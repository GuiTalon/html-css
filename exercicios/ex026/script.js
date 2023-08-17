const btnMobile = document.getElementsByClassName('btn-expandir')

function toggleMenu()
    const nav = document.getElementsByClassName('menu-lateral')
    nav.classList.toggle('active');

btnMobile.addEventListener('click', toggleMenu)