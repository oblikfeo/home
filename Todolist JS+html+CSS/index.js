// функция смены цвета фона в live режиме
let fon = document.querySelector('.fon')
fon.addEventListener('input', myColor);
function myColor() {
    let color = localStorage.getItem('color') || fon.value
    document.body.style.backgroundColor = color;
    bgColor()
    }

// добавление тасков
const taskInput = document.querySelector('.input')
const add = document.querySelector('.add')
let taskList = document.querySelector('.main')
const tasks = document.querySelector('.tasks')

add.addEventListener('click', function () {
    const taskText = taskInput.value
    const taskHTML = 
    `
    <div class="active">
            <span>${taskText}</span>
            <div class="button">
                <button class="but" data-action="done">✔</button>
                <button class="but" data-action="delete">❌</button>
            </div>
        </div>
    `
    tasks.insertAdjacentHTML('beforeend', taskHTML)
    local()
    taskInput.value = ''
    taskInput.focus()
})

// удаление тасков
taskList.addEventListener('click', function (e) {
    if (e.target.dataset.action === "delete") {
        const node = e.target.closest('.active')
        node.remove()
        local()
    }
})

// local storage
function local() {
    localStorage.setItem('HTML', tasks.innerHTML)
}

function bgColor() {
    localStorage.setItem('color', fon.value)
}

function cache() {
    if (localStorage.getItem('HTML')) {
        tasks.innerHTML = localStorage.getItem('HTML')
    }
    if (localStorage.getItem('color')) {
        fon.value = localStorage.getItem('color')
    }
}

window.onload = function() {
    cache()
    myColor()
}


