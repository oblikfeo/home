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
    console.log(numValue)
}

// функция подсчета
let first
let second
let operation

addEventListener('click', (e) => {
    
})
