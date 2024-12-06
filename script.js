

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const messageDiv = document.getElementById('message');
const questionDiv = document.getElementById('question');

noBtn.addEventListener('click', () => {
noBtn.style.animation = 'shake 0.5s';
setTimeout(() => {
noBtn.style.animation = '';
noBtn.style.transform = 'translateX(100vw)';
}, 500);
});

yesBtn.addEventListener('click', () => {
questionDiv.style.display = 'none';
messageDiv.innerText = 'Thanks for accepting!';
messageDiv.style.color = 'green';
});