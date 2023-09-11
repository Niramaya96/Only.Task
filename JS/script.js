document.querySelectorAll('.mybtn').forEach(o => o.addEventListener('click', openButton))
function openButton() {
  this.classList.toggle("expand");
}