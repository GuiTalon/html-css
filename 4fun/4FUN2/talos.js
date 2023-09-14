const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const image = document.querySelector('.menu');
    image.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu); 
