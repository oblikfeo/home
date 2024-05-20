// кнопка отчищения A/C
const resultatElement = document.getElementById('resultat')
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
let first
let second
let operation
let sum

addEventListener('click', (e) => {
    switch(e.target.value) {
        case '+': 
            if (e.target.value == "+") {
            first = resultatElement.textContent
            resultatElement.innerText = ''
            sum = first + second
            };
        case '-':
            if (e.target.value == "-") {
                first = resultatElement.textContent
                resultatElement.innerText = ''
                operation = '-'
            };
        case 'x': 
            if (e.target.value == "x") {
            first = resultatElement.textContent
            resultatElement.innerText = ''
            operation = '*'
            };
        case '/': 
            if (e.target.value == "/") {
                first = resultatElement.textContent
                resultatElement.innerText = ''
                operation = '/'
            };
        case '=':
            if (first) {
                second = resultatElement.textContent
                console.log(sum)
            }
        }
        console.log(first)
        console.log(second)
})

