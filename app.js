const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#player1');
const p2Display = document.querySelector('#player2');

let p1Score = 0;

p1Button.addEventListener('click', function () {
    p1Score += 1;
    p1Display.textContent = p1Score
})