let score = 0;
const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = window
      .getComputedStyle(mario)
      .bottom.replace('px', ' ')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      // Restante do código permanece igual.

      // Adicione o seguinte código para incrementar a pontuação
      score++;
      console.log('Score:', score);
    }
  }, 10)
}
