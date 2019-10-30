const body = document.body;
const btn = document.getElementById('btn-menu');

btn.addEventListener('click', _=>body.classList.toggle('show'));

btn.addEventListener('mousedown', (e) => {e.preventDefault()});