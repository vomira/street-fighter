const game = new Game();
let last4KeysP1 = [];
let last4KeysP2 = [];


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


function mouseClicked() {
    if(game.gamePhase === 0) {
    game.starter.play();
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

function addToKeyArr(keyArr) {
    keyArr.push(keyCode);
    if(keyArr.length > 4) {
        keyArr.splice(0,1);
    }
}

function isSpecialKomboPressed(keyComboArr, lastKeysArr) {
    let match;
    for(let index in keyComboArr) {
        if(keyComboArr[index] !== lastKeysArr[index]) {
            return match = false;
        } else {
            match = true;
        }
    }
    return match;
}


function keyPressed() {

    if(keyCode === 87) {
        addToKeyArr(last4KeysP1);
        game.player1.jump();
        if(game.player1.direction === 'right') {
            game.player1.image = game.player1ImgJumpRight;
        } else {
        game.player1.image = game.player1ImgJumpLeft;
        }
        setTimeout(function() {setDirectionImgP1()},900);
    }

    if(keyCode === 83) {
        addToKeyArr(last4KeysP1); 
    }

    if(keyCode === 65) {
        addToKeyArr(last4KeysP1);
        if(isSpecialKomboPressed([83, 84, 70, 65], last4KeysP1)) {
            if(game.player1.direction === 'right') {
                game.player1.image = game.player1ImgSpecialAttackRight;
                game.ball1.ballImage = game.player1ImgSpecialAttackBallRight;
                game.ball1.x = game.player1.x + game.player1.height + 50;
            } else {
                game.player1.image = game.player1ImgSpecialAttackLeft;
                game.ball1.ballImage = game.player1ImgSpecialAttackBallLeft;
                game.ball1.x = game.player1.x - game.ball1.height - 50;
            }
            game.chunliYata.play();
            game.player1.specialAttack(game.player2);
            document.querySelector('#health2').value = game.player2.health;
            document.querySelector('#stamina1').value = game.player1.stamina;
            setTimeout(function() {
                setDirectionImgP1();
                setDirectionImgP2();
                game.ball1.ballImage = game.emptyHadokenBall;
            },1100);
            last4KeysP1 = [];
        } else {
            game.player1.moveLeft();
            setDirectionImgP1();   
        };
    }

    if(keyCode === 68) {
        addToKeyArr(last4KeysP1);
        game.player1.moveRight();
        setDirectionImgP1();
    }

    if(keyCode === 84) {
        addToKeyArr(last4KeysP1);
        if(game.player1.direction === 'right') {
            game.player1.image = game.player1ImgBlockRight;
        } else {
        game.player1.image = game.player1ImgBlockLeft;
    }
    }
    
    if(keyCode === 70) {
        addToKeyArr(last4KeysP1);
        game.player1.kick(game.player2);
        if(game.player1.direction === 'right') {
            game.player1.image = game.player1ImgKickRight;
        } else {
        game.player1.image = game.player1ImgKickLeft;
        }
        document.querySelector('#health2').value = game.player2.health;
        document.querySelector('#stamina1').value = game.player1.stamina;
        game.isGameFinished();
        setTimeout(function() {
            setDirectionImgP1();
        },150);
    }
    if(keyCode === 71) {
        addToKeyArr(last4KeysP1);
        game.player1.punch(game.player2);
        if(game.player1.direction === 'right') {
            game.player1.image = game.player1ImgPunchRight;
        } else {
        game.player1.image = game.player1ImgPunchLeft;
        }
        document.querySelector('#health2').value = game.player2.health;
        document.querySelector('#stamina1').value = game.player1.stamina;
        game.isGameFinished();
        setTimeout(function() {
            setDirectionImgP1()
        },200);
    }

    if(keyCode === 38) {
        addToKeyArr(last4KeysP2);
        game.player2.jump();
        if(game.player2.direction === 'right') {
            game.player2.image = game.player2ImgJumpRight;
        } else {
        game.player2.image = game.player2ImgJumpLeft;
        }
        setTimeout(function() {
            setDirectionImgP2();
        },1000);
    }

    if(keyCode === 40) {
        addToKeyArr(last4KeysP2); 
    }


    if(keyCode === 37) {
        addToKeyArr(last4KeysP2);
        game.player2.moveLeft();
        setDirectionImgP2();
        
    }
    if(keyCode === 39) {
        addToKeyArr(last4KeysP2);
        if(isSpecialKomboPressed([76, 40, 39, 39], last4KeysP2)) {
            if(game.player2.direction === 'right') {
                game.player2.image = game.player2ImgSpecialAttackRight;
                game.ball2.x = game.player2.x + game.player2.width;
                game.ball2.ballImage = game.player2ImgSpecialAttackBallRight;
            } else {

                game.player2.image = game.player2ImgSpecialAttackLeft;
                game.ball2.x = game.player2.x - game.ball2.width;
                game.ball2.ballImage = game.player2ImgSpecialAttackBallLeft;
            }
            game.player2.specialAttack(game.player1);
            game.hadokenRyu.play(); 
            document.querySelector('#health1').value = game.player1.health;
            document.querySelector('#stamina2').value = game.player2.stamina;
            setTimeout(function() {
                setDirectionImgP2();
                game.ball2.ballImage = game.emptyHadokenBall;
            },1000);
            last4KeysP2 = [];
        } else {
        game.player2.moveRight();
        setDirectionImgP2();
    }
    }

    if(keyIsDown(73)) {
        addToKeyArr(last4KeysP2);
        if(game.player2.direction === 'right') {
            game.player2.image = game.player2ImgBlockRight;
        } else {
        game.player2.image = game.player2ImgBlockLeft;
    }
    }

    if(keyCode === 75) {
        addToKeyArr(last4KeysP2);
        game.player2.kick(game.player1);
        if(game.player2.direction === 'right') {
            game.player2.image = game.player2ImgKickRight;
        } else {
        game.player2.image = game.player2ImgKickLeft;
        }
        document.querySelector('#health1').value = game.player1.health;
        document.querySelector('#stamina2').value = game.player2.stamina;
        game.isGameFinished();
        setTimeout(function() {
            setDirectionImgP2()
        },200);
    }
    if(keyCode === 76) {
        addToKeyArr(last4KeysP2);
        game.player2.punch(game.player1);
        if(game.player2.direction === 'right') {
            game.player2.image = game.player2ImgPunchRight;
        } else {
        game.player2.image = game.player2ImgPunchLeft;
        }
        document.querySelector('#health1').value = game.player1.health;
        document.querySelector('#stamina2').value = game.player2.stamina;
        game.isGameFinished();
        setTimeout(function() {
            setDirectionImgP2()
        },200);
    }

    //logic for starter screen
    if (keyCode === 13) {
        if(game.gamePhase === 0) {
        game.gamePhase = 1;
        document.querySelector("#game-start").style.display = "none";
        game.starter.stop();
        game.backgroundSong.play();
        game.fightSound.play();
        
    }
        if(game.gamePhase === 2 || game.gamePhase === 3) {
            document.querySelector("#game-end-ryu").style.display = "none";
            document.querySelector("#game-end-chun-li").style.display = "none";
            setup();
            game.gamePhase = 0;
            game.endingSong.stop();
            game.backgroundSong.loop();
        }
      }
}
function keyReleased() {
    if(keyCode === 84) {
        console.log('block released!')
        setDirectionImgP1();
        game.player1.blocked = false;
    }
    if(keyCode === 73) {
        console.log('block released!')
        setDirectionImgP2();
        game.player2.blocked = false;
    }
}

