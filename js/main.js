const game = new Game();

function preload() {
    game.preloadGame();
}

function setup() {
    createCanvas(1000, 400);
    game.setupGame();
}

function draw() {
    game.drawGame();
}

// add the jump function here:
function keyPressed() {
    if(keyCode === 87) {
        game.player1.jump();
        game.player2.collision(game.player1)
    }
    if(keyCode === 65) {
        game.player1.moveLeft();
        game.player1.collision(game.player2)
    }
    if(keyCode === 68) {
        game.player1.moveRight();
        game.player1.collision(game.player2)
    }
    if(keyCode === 69) {
        game.player1.kick(game.player2);
    }
    if(keyCode === 38) {
        game.player2.jump();
        game.player2.collision(game.player1)
    }
    if(keyCode === 37) {
        game.player2.moveLeft();
        game.player2.collision(game.player1)
    }
    if(keyCode === 39) {
        game.player2.moveRight();
        game.player2.collision(game.player1)
    }
}