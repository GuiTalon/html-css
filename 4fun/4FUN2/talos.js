function changeBackground(iconId) {
    const background = document.querySelector('header');
    const imagePath = `url(${iconId}.jpg)`;

    background.style.backgroundImage = imagePath;
}


document.getElementById('icon1').addEventListener('click', function () {
    changeBackground('TALON/TALON1');
});

document.getElementById('icon2').addEventListener('click', function () {
    changeBackground('TALON/TALON2');
});

document.getElementById('icon3').addEventListener('click', function () {
    changeBackground('TALON/TALON3');
});

document.getElementById('icon4').addEventListener('click', function () {
    changeBackground('TALON/TALON4');
});

document.getElementById('icon5').addEventListener('click', function () {
    changeBackground('TALON/TALON5');
});

document.getElementById('icon6').addEventListener('click', function () {
    changeBackground('TALON/TALON6');
});

document.getElementById('icon7').addEventListener('click', function () {
    changeBackground('TALON/TALON7');
});

document.getElementById('icon8').addEventListener('click', function () {
    changeBackground('TALON/TALON8');
});

document.getElementById('icon9').addEventListener('click', function () {
    changeBackground('TALON/TALON9');
});

document.getElementById('icon10').addEventListener('click', function () {
    changeBackground('TALON/TALON10');
});

