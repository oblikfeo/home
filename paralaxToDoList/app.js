document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.011}deg;
        `
    })
})

// блок функционала добавления задачи, отчищение дива ввода, фокуса
const input = document.querySelector('.text')
const add = document.querySelector('.add')
const task = document.querySelector('.tasklist')
const template = document.querySelector('.template')
const button = document.querySelector('.button')

add.addEventListener('click', function (e) {
    const tasks = document.querySelectorAll('.task')
    if (input.value !== "" && tasks.length < 5) {
    const item = template.content.cloneNode(true)
    item.querySelector('.shadow').textContent = input.value
    task.append(item)
    input.value = ""
    input.focus()
    }
})


// функционал кнопки "удалить" у строки ввода
const del = document.querySelector('.del')

del.addEventListener('click', function (e) {
    input.value = ""
    task.replaceChildren()
})


// функционал кнопки "удалить" у задачи
    task.addEventListener('click', delTask)
   
    function delTask(e) {
        if (e.target.dataset.action == 'delete') {
            e.target.closest('.task').setAttribute('style', 'color:red; opacity: .3')
        }
    }


// функционал кнопки "выполнено" у задачи
task.addEventListener('click', doneTask)

function doneTask(e) {
    if (e.target.dataset.action == 'done') {
        e.target.closest('.task').setAttribute('style', 'color: rgb(30, 255, 0)')
    }
}

//изменение цвета заголовка
const TDL = document.querySelector('.ToDoList')

TDL.addEventListener('click', (e) => {
    TDL.setAttribute('style',
        `color: #${Math.floor(Math.random() * 0xffffff).toString(16)}`
    )
})

//сменить фон
const mby = document.querySelector('.title__p')
const fon = document.querySelector('.layer-1')
const planet1 = document.querySelector('.layer-3')
const planet2 = document.querySelector('.layer-4')
const planet3 = document.querySelector('.layer-5')
const planet4 = document.querySelector('.layer-6')
const whiteInput = document.querySelector('.text')


    function dark() { // функция смены на темную тему
    fon.setAttribute('style', 'background-image: url(img2/kosmoc.jpeg)')
    planet1.setAttribute('style', 'background-image: none')
    planet2.setAttribute('style', 'background-image: none')
    planet3.setAttribute('style', 'background-image: none')
    planet4.setAttribute('style', 'background-image: none')
    TDL.setAttribute('style', 'color: black; text-shadow: 3px 3px white')
    whiteInput.setAttribute('style', 'color: white')
    }


    function green() { // функция смены на зеленую тему
        fon.setAttribute('style', 'background-image: url(img/fon1.jpg)')
    planet1.setAttribute('style', 'background-image: url(img/leaf3.png)')
    planet2.setAttribute('style', 'background-image: url(img/water.png)')
    planet3.setAttribute('style', 'background-image: url(img/leaf2.png)')
    planet4.setAttribute('style', 'background-image: url(img/rain.png)')
    TDL.setAttribute('style', 'color: white; text-shadow: 3px 3px black')
    whiteInput.setAttribute('style', 'color: black')
    }

    mby.addEventListener('click', (e) => {
        dark();
        setTimeout(() => {
            green()
        }, 3000);
    })

