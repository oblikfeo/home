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
let tasks = document.querySelector('.tasks')
let select = document.querySelector('.select')
let arr = []

add.addEventListener('click', function () {
    if (select.value === "Активные") {
        const taskText = taskInput.value
        const objTask = {
            id: Date.now(),
            text: taskText,
            done: false,
        }
        arr.push(objTask)
        const taskHTML = 
        `
        <div id="${objTask.id}" class="false">
                <span>${objTask.text}</span>
                <div class="button">
                    <button id="${objTask.id}" class="but" data-action="done">✔</button>
                    <button id="${objTask.id}" class="but" data-action="delete">❌</button>
                </div>
            </div>
        `
        tasks.insertAdjacentHTML('beforeend', taskHTML)
        taskInput.value = ''
        taskInput.focus()
        saveArr()
    } else alert('Вы пытаетесь добавить задачу в завершенные')

})

// реализация selection
select.addEventListener('change', function () {
    switch(select.value) {
        case 'Завершенные' : 
            finish = arr.filter((item) => item.done === true)
            tasks.innerHTML = ""
            finish.map(task => {
                const taskHTML = 
                `
                <div id="${task.id}" class="false">
                        <span>${task.text}</span>
                        <div class="button">
                            <button id="${task.id}" class="but" data-action="delete">❌</button>
                        </div>
                    </div>
                `
                tasks.insertAdjacentHTML('beforeend', taskHTML)
            })
            saveArr()
            console.log(finish)
            return
        case 'Активные' : 
            create = arr.filter((item) => item.done === false)
            tasks.innerHTML = ""
            create.map(task => {
                const taskHTML = 
                `
                <div id="${task.id}" class="false">
                        <span>${task.text}</span>
                        <div class="button">
                            <button id="${task.id}" class="but" data-action="done">✔</button>
                            <button id="${task.id}" class="but" data-action="delete">❌</button>
                        </div>
                    </div>
                `
                tasks.insertAdjacentHTML('beforeend', taskHTML)
            })
            saveArr()
            console.log(create)
            return
    }
})


// удаление тасков и выполнение тасков
taskList.addEventListener('click', function (e) {
    if (e.target.dataset.action === "delete") {
        const index = arr.findIndex(item => item.id == e.target.id)
        const node = e.target.closest('.false')
        node.remove()
        arr.splice(index, 1)
    }
    saveArr()
})
taskList.addEventListener('click', function (e) {
    if (e.target.dataset.action === "done") {
        const index = arr.findIndex(item => item.id == e.target.id)
        arr[index].done = true
        e.target.closest('.false').remove()
    }
    saveArr()
})



// local storage

function bgColor() {
    localStorage.setItem('color', fon.value)
}

function saveArr() {
    localStorage.setItem('tasks', JSON.stringify(arr))
}

function cache() {
    if (localStorage.getItem('color')) {
        fon.value = localStorage.getItem('color')
    }
    if (localStorage.getItem('tasks')) {
        arr = JSON.parse(localStorage.getItem('tasks'))
        let arr2 = []
        arr2 = arr.filter((item) => item.done === false)
        tasks.innerHTML = ""
        arr2.map(task => {
            const taskHTML = 
            `
            <div id="${task.id}" class="false">
                    <span>${task.text}</span>
                    <div class="button">
                        <button id="${task.id}" class="but" data-action="done">✔</button>
                        <button id="${task.id}" class="but" data-action="delete">❌</button>
                    </div>
                </div>
            `
            tasks.insertAdjacentHTML('beforeend', taskHTML)
    })
    }
}

window.onload = function() {
    cache()
    myColor()
}