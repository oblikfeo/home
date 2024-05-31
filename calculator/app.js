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
let value1 
let value2

addEventListener('click', (e) => {
    switch(e.target.value) {
        case '+': 
            value1 = resultatElement.textContent
            resultatElement.innerText = '+'
            math = Number(value1) + Number(value2);
            break
        case '-':
                value1 = resultatElement.textContent
                resultatElement.innerText = '-'
                math = Number(value1) - Number(value2);
            break
        case 'x': 
                value1 = resultatElement.textContent
                resultatElement.innerText = '*'
                math = Number(value1) * Number(value2);
            break
        case '/': 
                value1 = resultatElement.textContent
                resultatElement.innerText = '/'
                math = Number(value1) / Number(value2);
                break
        case '=':
                if (!!value1) {
                    value2 = resultatElement.textContent
                    resultatElement.innerText = ''
                    console.log(math)
                }
                break
        }
})

