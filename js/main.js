const game = new Game();

function preload() {
    game.preloadGame();
}

function setup() {
    createCanvas(2000, 800);
    game.setupGame();
}

function draw() {
    game.drawGame();
}

// add the jump function here:
function keyPressed() {
    if(keyCode === 32) {
        game.player1.jump();
    }
    if(keyCode === 38) {
        game.player2.jump();
    }
}