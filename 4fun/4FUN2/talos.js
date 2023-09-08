function changeBackground(iconId) {
    const background = document.querySelector('header');
    const imagePath = `url(${iconId}.jpg)`;

    background.style.backgroundImage = imagePath;
}

function changeSkin(iconId, skinName) {
    const skinNameElement = document.getElementById('skinName');
    skinNameElement.textContent = skinName;
}

document.getElementById('icon1').addEventListener('click', function () {
    changeBackground('TALON/TALO1');
    changeSkin('TALON/TALO1', 'RENEGADO');
});

document.getElementById('icon2').addEventListener('click', function () {
    changeBackground('TALON/TALO2');
    changeSkin('TALON/TALON2', 'ELITE CARMESIN');
});

document.getElementById('icon3').addEventListener('click', function () {
    changeBackground('TALON/TALO3');
    changeSkin('TALON/TALO3', 'LÂMINAS DRACÔNICAS');
});

document.getElementById('icon4').addEventListener('click', function () {
    changeBackground('TALON/TALON4');
    changeSkin('TALON/TALON4', 'SSW');
});

document.getElementById('icon5').addEventListener('click', function () {
    changeBackground('TALON/TALO4');
    changeSkin('TALON/TALO4', 'LUA SANGRENTA');
});

document.getElementById('icon6').addEventListener('click', function () {
    changeBackground('TALON/TALO4t');
    changeSkin('TALON/TALO4t', 'ESPADA RESILIENTE');
});

document.getElementById('icon7').addEventListener('click', function () {
    changeBackground('TALON/TALO5');
    changeSkin('TALON/TALO5', 'BOSQUE SOMBRIO');
});

document.getElementById('icon8').addEventListener('click', function () {
    changeBackground('TALON/TALO6');
    changeSkin('TALON/TALO6', 'ROSA DEFINHADA');
});

document.getElementById('icon9').addEventListener('click', function () {
    changeBackground('TALON/TALO8');
    changeSkin('TALON/TALO8', 'VELHO OSTE');
});

document.getElementById('icon10').addEventListener('click', function () {
    changeBackground('TALON/TALO7');
    changeSkin('TALON/TALO7', 'VELHO OESTE DE PRESTÍGIO');
});
