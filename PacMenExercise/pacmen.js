var pos = 0;
const pacArray = [
  ['./PacMan1.png', './PacMan2.png'],
  ['./PacMan3.png', './PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';
  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0) {
    item.velocity.x = -item.velocity.x;
    direction = item.velocity.x > 0 ? 0 : 1;
  }
  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0) {
    item.velocity.y = -item.velocity.y;
    direction = item.velocity.y > 0 ? 2 : 3;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
//don't change this line
  module.exports = { checkCollisions, update, pacMen };
