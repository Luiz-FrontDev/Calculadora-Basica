function insertToDisplay(data) {
    const display = document.querySelector('#display');
    const operadores = ['+', '-', '*', '÷'];

    if (
        operadores.includes(data) &&
        operadores.includes(display.value.slice(-1))
    ) {
        display.value = display.value.slice(0, -1) + data;
    } else {
        display.value += data;
    }
};

function clean() {
    document.querySelector('#display').value = '';
};

function back() {
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
};

function result() {
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value.replace(/÷/g, '/'));
    } catch {
        display.value = 'Error';
    }
};