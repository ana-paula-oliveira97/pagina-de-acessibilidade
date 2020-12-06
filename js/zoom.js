window.onload = function () {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    var elementBtnNormalFont = document.getElementById('normal-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 5;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });


    elementBtnNormalFont.addEventListener('click', function (event) {
        fontSize = fontSize;
        elementBody.style.fontSize = fontSize;
    });
}