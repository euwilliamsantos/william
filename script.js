const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');
const scoreElement = document.querySelector('.score');

audioStart = new Audio('./audio-theme.mp3');
audioGameOver = new Audio('./audio_gameover.mp3');

let score = 0;

const startGame = () => {
  pipe.classList.add('pipe-animation');
  start.style.display = 'none';

  audioStart.play();
  audioStart.loop = true;
}

const restartGame = () => {
  gameOver.style.display = 'none';
  pipe.style.left = '';
  pipe.style.right = '0';
  mario.src = './img/mario.gif';
  mario.style.width = '150px';
  mario.style.bottom = '0';

  start.style.display = 'none';

  audioGameOver.pause();
  audioGameOver.currentTime = 0;

  audioStart.play();
  audioStart.currentTime = 0;
}

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 800);
}

const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.classList.remove('pipe-animation');
      pipe.style.left = `${pipePosition}px`;

      mario.classList.remove('jump');
      mario.style.bottom = `${marioPosition}px`;

      mario.src = './img/game-over.png';
      mario.style.width = '80px';
      mario.style.marginLeft = '50px';

      function stopAudioStart() {
        audioStart.pause();
      }
      stopAudioStart();

      audioGameOver.play();

      function stopAudio() {
        audioGameOver.pause();
      }
      setTimeout(stopAudio, 7000);

      gameOver.style.display = 'flex';

      clearInterval(loop);
    } else if (pipePosition < 0) {
      // Adiciona pontuação quando passa pelo obstáculo
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
  }, 10);
}

loop();

document.addEventListener('keypress', e => {
  const tecla = e.key;
  if (tecla === ' ') {
    jump();
  }
});

document.addEventListener('touchstart', e => {
  if (e.touches.length) {
    jump();
  }
});

document.addEventListener('keypress', e => {
  const tecla = e.key;
  if (tecla === 'Enter') {
    startGame();
  }
});
