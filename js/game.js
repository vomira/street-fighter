class Game {
    constructor() {
        this.gamePhase = 0;
    }

    preloadGame() {
        this.backgroundImg = loadImage('assets/background_arena.jpg');
        this.player1ImgLeft = loadImage('assets/chun-li-standing-left.gif');
        this.player1ImgRight = loadImage('assets/chun-li-standing-right.gif');
        this.player2ImgLeft = loadImage('assets/ryu-standing-left.gif');
        this.player2ImgRight = loadImage('assets/ryu-standing-right.gif');
        this.player1ImgPunchRight = loadImage('assets/chun-li-punch-right.png');
        this.player1ImgPunchLeft = loadImage('assets/chun-li-punch-left.png')
        this.player1ImgKickRight = loadImage('assets/chun-li-kick-right.png');
        this.player1ImgKickLeft = loadImage('assets/chun-li-kick-left.png');
        this.player1ImgJumpRight = loadImage('assets/chun-li-jump-right.gif');
        this.player1ImgJumpLeft = loadImage('assets/chun-li-jump-left.gif');
        this.player1ImgBlockRight = loadImage('assets/chun-li-block-right.png');
        this.player1ImgBlockLeft = loadImage('assets/chun-li-block-left.png');
        this.player1ImgSpecialAttackRight = loadImage('assets/chun-li-special-attack-right.gif');
        this.player1ImgSpecialAttackLeft = loadImage('assets/chun-li-special-attack-left.gif');
        this.player1ImgSpecialAttackBallRight = loadImage('assets/haduken-ball-right-chun.gif');
        this.player1ImgSpecialAttackBallLeft = loadImage('assets/haduken-ball-left-chun.gif');
        this.player2ImgPunchLeft = loadImage('assets/ryu-punch-left.png');
        this.player2ImgPunchRight = loadImage('assets/ryu-punch-right.png')
        this.player2ImgKickLeft = loadImage('assets/ryu-kick-left.png');
        this.player2ImgKickRight = loadImage('assets/ryu-kick-right.png')
        this.player2ImgJumpLeft = loadImage('assets/ryu-jump-left.gif');
        this.player2ImgJumpRight = loadImage('assets/ryu-jump-right.gif')
        this.player2ImgBlockLeft = loadImage('assets/ryu-block-left.png');
        this.player2ImgBlockRight = loadImage('assets/ryu-block-right.png');
        this.player2ImgSpecialAttackLeft = loadImage('assets/ryu-hadoken-wo-ball-left.gif');
        this.player2ImgSpecialAttackBallLeft = loadImage('assets/hadoken-ball-left.gif');
        this.player2ImgSpecialAttackRight = loadImage('assets/ryu-hadoken-wo-ball-right.gif');
        this.player2ImgSpecialAttackBallRight = loadImage('assets/hadoken-ball-right.gif');
        this.emptyHadokenBall = loadImage('assets/empty-hadoken-ball.png');
        
    
        
       
        this.starter = loadSound('sounds/opening.mp3');
        this.fightSound = loadSound('sounds/fight.mp3');
        this.backgroundSong = loadSound('sounds/honda-background.mp3');
        this.endingSong = loadSound('sounds/honda-ending.mp3');
        this.hadokenRyu = loadSound('sounds/ryuken-hadoken.mp3');
        this.chunliYata = loadSound('sounds/chun-li-yata.mp3');
    }

    setupGame() {
        //add components to the game
        this.background = new Background();
        this.background.image = this.backgroundImg;
        this.player1 = new Player('Chun Li', 80, 100, 100, 200);
        this.player1.image = this.player1ImgRight;
        this.player1.direction = 'right';
        this.ball1 = new Ball(this.player1.x + 150);
        this.ball1.ballImage = this.emptyHadokenBall;
        this.ball1.direction = 'right';
        this.player2 = new Player('Ryu', 100, 80, width-200);
        this.player2.image = this.player2ImgLeft;
        this.ball2 = new Ball(this.player2.x - 150);
        this.ball2.ballImage = this.emptyHadokenBall;
        this.ball2.direction = 'left';
        this.player2.direction = 'left';
        document.querySelector('#stamina1').value = game.player1.stamina;
        document.querySelector('#stamina2').value = game.player2.stamina;
        document.querySelector('#health1').value = game.player1.health;
        document.querySelector('#health2').value = game.player2.health;
    }

    drawGame() {
        this.background.drawBackground();
        this.player1.drawPlayer();
        this.player2.drawPlayer();
        this.ball1.drawBall();
        this.ball2.drawBall();
        if(frameCount % 50 === 0) {
            this.player1.staminaReload();
            document.querySelector('#stamina1').value = game.player1.stamina;
            this.player2.staminaReload();
            document.querySelector('#stamina2').value = game.player2.stamina;
          }
    }

    isGameFinished() {
        if(game.player1.health <= 0) {
            this.gamePhase = 2;
            this.backgroundSong.stop();
            this.endingSong.play();
        }
        if(game.player2.health <= 0) {
            this.gamePhase = 3;
            this.backgroundSong.stop();
            this.endingSong.play();
        }    
    }


}