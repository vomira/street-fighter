const game = new Game();

function preload() {
    game.preloadGame();
}

function setup() {
    const canvas = createCanvas(1000, 400);
    canvas.parent('sketch-holder');
    game.setupGame();
   
}

function draw() {
    game.drawGame();
    
}

function keyPressed() {
    if(keyCode === 87) {
        game.player1.jump();
    }

    if(keyCode === 65) {
        game.player1.moveLeft();
    }
    if(keyCode === 68) {
        game.player1.moveRight();
    }

    if(keyCode === 84) {
        game.player1.block();
        document.querySelector('#stamina1').value = game.player1.stamina;
    }
    
    if(keyCode === 70) {
        game.player1.kick(game.player2);
        document.querySelector('#health2').value = game.player2.health;
        document.querySelector('#stamina1').value = game.player1.stamina;
        game.isGameFinished();
    }
    if(keyCode === 71) {
        game.player1.punch(game.player2);
        document.querySelector('#health2').value = game.player2.health;
        document.querySelector('#stamina1').value = game.player1.stamina;
        game.isGameFinished();
    }

    if(keyCode === 38) {
        game.player2.jump();
    }

    if(keyCode === 37) {
        game.player2.moveLeft();
    }
    if(keyCode === 39) {
        game.player2.moveRight();
    }

    if(keyCode === 73) {
        game.player2.block();
        document.querySelector('#stamina2').value = game.player2.stamina;
    }

    if(keyCode === 75) {
        game.player2.kick(game.player1);
        document.querySelector('#health1').value = game.player1.health;
        document.querySelector('#stamina2').value = game.player2.stamina;
        game.isGameFinished();
    }
    if(keyCode === 76) {
        game.player2.punch(game.player1);
        document.querySelector('#health1').value = game.player1.health;
        document.querySelector('#stamina2').value = game.player2.stamina;
        game.isGameFinished();
    }

    
}

