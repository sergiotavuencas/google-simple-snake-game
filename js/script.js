let canvas = document.getElementById(
  "snake"
); /* Retorna o elemento com a ID referenciada */
let context = canvas.getContext(
  "2d"
); /* Renderiza o elemento gráfico dentro do canvas */
let box = 32; /* Quantidade de pixels */
let snake = [{ x: 8 * box, y: 8 * box }]; /* Posiciona a cobra no meio */
let direction = "right";

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
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "darkgreen";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

function startGame() {
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

  createBG();
  createSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box / 2;
  if (direction == "left") snakeX -= box / 2;
  if (direction == "up")
    snakeY -=
      box /
      2; /* Como a renderização começa do canto superior esquerdo, y é invertido */
  if (direction == "down") snakeY += box / 2;

  /* Remove o último elemento do array */
  snake.pop();

  /* Cria um novo elemento após a cobra ter mudado de posição */
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}

let game = setInterval(
  startGame,
  100
); /* A cada 100 milisegundos, atualiza o jogo */
