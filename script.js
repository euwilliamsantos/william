let score = 0;
const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = window
      .getComputedStyle(mario)
      .bottom.replace('px', ' ')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      // ... (o restante do código permanece o mesmo)

      gameOver.style.display = 'flex'

      clearInterval(loop)
    } else if (pipePosition <= 0) {
      score++; // Incrementa a pontuação quando passa pelo obstáculo
    }
  }, 10)
}
const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = window
      .getComputedStyle(mario)
      .bottom.replace('px', ' ')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      // ... (o restante do código permanece o mesmo)

      gameOver.style.display = 'flex'

      clearInterval(loop)
    } else if (pipePosition <= 0) {
      score++; // Incrementa a pontuação quando passa pelo obstáculo
      document.getElementById('score').textContent = score; // Atualiza o elemento de pontuação
    }
  }, 10)
}

