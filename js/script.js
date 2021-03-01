let canvas = document.getElementById(
  "snake"
); /* Retorna o elemento com a ID referenciada */
let context = canvas.getContext(
  "2d"
); /* Renderiza o elemento gráfico dentro do canvas */
let box = 32; /* Quantidade de pixels */
let snake = [{ x: 8 * box, y: 8 * box }]; /* Posiciona a cobra no meio */

function createBG() {
  context.fillStyle = "lightgreen"; /* Define a cor do elemento */
  context.fillRect(
    0,
    0,
    16 * box,
    16 * box
  ); /* Define a área do elemento, começando pela posição em x e y, depois suas dimensões */
}

function createSnake() {
  for (i = 0; snake.length; i++) {
    context.fillStyle = "darkgreen";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

createBG();
createSnake();
