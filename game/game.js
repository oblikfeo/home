//активация игры
const startgame = document.querySelector('.rules')
const pole = document.querySelectorAll('.pole')
const poleInput = document.querySelector('.pole')
const game = document.querySelector('.game')
const key1 = document.querySelector('.keyboard1')
const key2 = document.querySelector('.keyboard2')
const key3 = document.querySelector('.keyboard3')
const body = document.querySelector('body')
const key = document.querySelectorAll('.but')
const word = document.querySelector('.but')


startgame.addEventListener('click', start)
function start() {
    alert('Правила игры: В нижней строчке загадно слово, вводите слова что бы угадать буквы (совпадение по наличию буквы подсветится желтым, угаданный номер буквы подсветится красным')
    game.setAttribute('style', 'display: flex')
    key1.setAttribute('style', 'display: block')
    key2.setAttribute('style', 'display: block')
    key3.setAttribute('style', 'display: block')
    startgame.setAttribute('style', 'display: none')
    darkmode()
}


// переход в темный режим
function darkmode() {
    let dark = confirm('Включить темную тему?')
    if (dark) {
    body.setAttribute('style', 'background-color: black')
    let arr = [...pole]
    arr.map(each => {
        each.setAttribute('style', 'border: 1px solid white; background-color: black; color: white')
    })
    let arr2 = [...key]
    arr2.map(each => {
        each.setAttribute('style', 'color: white; background-color: black')
    })
    } 
}

// ввод значений с клавиатуры
let val

addEventListener('click', (e) => {
    let buffer = e.target.value
    val.value = buffer
    console.log(buffer)
})

addEventListener('click', (e) => {
        let id = e.target.id
        val = document.getElementById(id)
        console.log(val)
    })

// проверки
function yellow14() {
    let case1 = document.getElementById('1')
    let case2 = document.getElementById('2')
    let case3 = document.getElementById('3')
    let case4 = document.getElementById('4')
    let arr1 = [case1, case2, case3, case4]
    check1()
    check2()
    check3()
    check4()
}

check1 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case1 = document.getElementById('1')
    if (arr.includes(case1.value)) {
        case1.setAttribute('style', 'background-color: yellow')
    } return
}

check2 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case2 = document.getElementById('2')
    if (arr.includes(case2.value)) {
        case2.setAttribute('style', 'background-color: yellow')
    } return
}

check3 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case3 = document.getElementById('3')
    if (arr.includes(case3.value)) {
        case3.setAttribute('style', 'background-color: yellow')
    } return
}

check4 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case4 = document.getElementById('4')
    if (arr.includes(case4.value)) {
        case4.setAttribute('style', 'background-color: yellow')
    } return
}

function yellow58() {
    let case5 = document.getElementById('5')
    let case6 = document.getElementById('6')
    let case7 = document.getElementById('7')
    let case8 = document.getElementById('8')
    let arr1 = [case5, case6, case7, case8]
    check5()
    check6()
    check7()
    check8()
}

check5 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case5 = document.getElementById('5')
    if (arr.includes(case5.value)) {
        case5.setAttribute('style', 'background-color: yellow')
    } return
}

check6 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case6 = document.getElementById('6')
    if (arr.includes(case6.value)) {
        case6.setAttribute('style', 'background-color: yellow')
    } return
}

check7 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case7 = document.getElementById('7')
    if (arr.includes(case7.value)) {
        case7.setAttribute('style', 'background-color: yellow')
    } return
}

check8 = () => {
    let arr = ['м', 'а', 'к', 'с']
    let case8 = document.getElementById('8')
    if (arr.includes(case8.value)) {
        case8.setAttribute('style', 'background-color: yellow')
    } return
}
