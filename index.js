// функция смены цвета фона в live режиме
document.querySelector('.fon').addEventListener('input', myColor);
function myColor() {
    let color = document.querySelector('.fon').value;
    document.body.style.backgroundColor = color;
    }