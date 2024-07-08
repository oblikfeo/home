const panels = document.querySelectorAll('.twik');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));