const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shake = document.querySelector('.shake');

const { width, height } = canvas;

let y = Math.floor(Math.random() * height);

let x = Math.floor(Math.random() * width);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

const MOVE_AMOUNT = 10;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT * 2;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

function clearCanvas() {
  canvas.classList.add('shake');

  ctx.clearRect(0, 0, width, height);

  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

shake.addEventListener('click', clearCanvas);
window.addEventListener('keydown', handleKey);
