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
    clear();
    game.drawGame();

    if (keyIsDown(84)) {
        game.player1.block();
        document.querySelector('#stamina1').value = game.player1.stamina;
      }

    if (keyIsDown(73)) {
        game.player2.block();
        document.querySelector('#stamina2').value = game.player2.stamina;
      }

    if(game.gamePhase === 2) {
        document.querySelector('#game-end-ryu').style.display = 'flex';
    }
    if(game.gamePhase === 3) {
        document.querySelector('#game-end-chun-li').style.display = 'flex';
    }
}

function setDirectionImgP1() {
    game.player1.setPlayerDirection(game.player2);
        if(game.player1.direction === 'right') {
            game.player1.image = game.player1ImgRight;
        } else {
            game.player1.image = game.player1ImgLeft;
        }
}

function setDirectionImgP2() {
    game.player2.setPlayerDirection(game.player1);
        if(game.player2.direction === 'right') {
            game.player2.image = game.player2ImgRight;
        } else {
            game.player2.image = game.player2ImgLeft;
        }
}

function keyPressed() {
    if(keyCode === 87) {
        game.player1.jump();
        game.player1.image = game.player1ImgJump;
        setTimeout(function() {game.player1.image = game.player1ImgRight},900);
    }

    if(keyCode === 65) {
        game.player1.moveLeft();
        setDirectionImgP1();   
    }

    if(keyCode === 68) {
        game.player1.moveRight();
        setDirectionImgP1();
    }

    if(keyCode === 84) {
        game.player1.image = game.player1ImgBlock;
    }
    
    if(keyCode === 70) {
        game.player1.kick(game.player2);
        game.player1.image = game.player1ImgKick;
        document.querySelector('#health2').value = game.player2.health;
        document.querySelector('#stamina1').value = game.player1.stamina;
        game.isGameFinished();
        setTimeout(function() {
            setDirectionImgP1();
        },150);
    }
    if(keyCode === 71) {
        game.player1.punch(game.player2);
        game.player1.image = game.player1ImgPunch;
        document.querySelector('#health2').value = game.player2.health;
        document.querySelector('#stamina1').value = game.player1.stamina;
        game.isGameFinished();
        setTimeout(function() {game.player1.image = game.player1ImgRight},200);
    }

    if(keyCode === 38) {
        game.player2.jump();
        game.player2.image = game.player2ImgJump;
        setTimeout(function() {game.player2.image = game.player2ImgRight},1000);
    }

    if(keyCode === 37) {
        game.player2.moveLeft();
        setDirectionImgP2();
        
    }
    if(keyCode === 39) {
        game.player2.moveRight();
        setDirectionImgP2();
    }

    if(keyIsDown(73)) {
        game.player2.image = game.player2ImgBlock;
    }

    if(keyCode === 75) {
        game.player2.kick(game.player1);
        game.player2.image = game.player2ImgKick;
        document.querySelector('#health1').value = game.player1.health;
        document.querySelector('#stamina2').value = game.player2.stamina;
        game.isGameFinished();
        setTimeout(function() {game.player2.image = game.player2ImgRight},200);
    }
    if(keyCode === 76) {
        game.player2.punch(game.player1);
        game.player2.image = game.player2ImgPunch;
        document.querySelector('#health1').value = game.player1.health;
        document.querySelector('#stamina2').value = game.player2.stamina;
        game.isGameFinished();
        setTimeout(function() {game.player2.image = game.player2ImgRight},200);
    }

    //logic for starter screen
    if (keyCode === 13) {
        if(game.gamePhase === 0) {
        game.gamePhase = 1;
        document.querySelector("#game-start").style.display = "none";
    }
        
        if(game.gamePhase === 2 || game.gamePhase === 3) {
            console.log(game.gamePhase);
            document.querySelector("#game-end-ryu").style.display = "none";
            document.querySelector("#game-end-chun-li").style.display = "none";
            setup();
            game.gamePhase = 0;

        }
      }
}

function keyReleased() {
    if(keyCode === 84) {
        console.log('block released!')
        game.player1.image = game.player1Img;
        game.player1.blocked = false;
    }
    if(keyCode === 73) {
        console.log('block released!')
        game.player2.image = game.player2Img;
        game.player2.blocked = false;
    }
}

