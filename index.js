// функция смены цвета фона в live режиме
document.querySelector('.fon').addEventListener('input', myColor);
function myColor() {
    let color = document.querySelector('.fon').value;
    document.body.style.backgroundColor = color;
    }

// добавление тасков
document.querySelector('.add').addEventListener('click', addTask)
function addTask() {
    let task = document.querySelector('.input')
    let divActive = document.createElement('div')
    divActive.className = "active"
    document.querySelector('.main').appendChild(divActive)
    divActive.innerText = task.value
    task.value = ""
}


