let countdownEl = document.getElementById('countdown');
let startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
  let timeLeft = 10;
  countdownEl.textContent = `${timeLeft} saniye kaldı`;

  let interval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      countdownEl.textContent = `${timeLeft} saniye kaldı`;
    } else {
      countdownEl.textContent = 'Süre doldu!';
      clearInterval(interval);
    }
  }, 1000);
});
