// кнопка отчищения A/C
const resultatElement = document.querySelector('.result')
const clearBut = document.querySelector('.AC')
clearBut.addEventListener('click', (e) => {
    resultatElement.innerText = ''
})

// набор цифр функция
addEventListener('click', butNum)

function butNum(e) {
    const numValue = e.target.value
    if (numValue < 10) resultatElement.innerText += numValue
}

// функция сбора данных
let math

addEventListener('click', (e) => {
    switch(e.target.value) {
        case '+': 
            if (e.target.value == "+") {
            resultatElement.innerText += '+'
            };
        case '-':
            if (e.target.value == "-") {
                resultatElement.innerText += '-'
            };
        case 'x': 
            if (e.target.value == "x") {
            resultatElement.innerText += '*'
            };
        case '/': 
            if (e.target.value == "/") {
                first = resultatElement.textContent
                resultatElement.innerText += '/'
            };
        case '=':
            if (e.target.value == "=") {
                math = eval(resultatElement.textContent)
                resultatElement.innerText += ('=' + math)
            }
            
        }
})

