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
        this.player1ImgPunch = loadImage('assets/chun-li-punch.png');
        this.player1ImgKick = loadImage('assets/chun-li-kick.png');
        this.player1ImgJump = loadImage('assets/chun-li-jump-right.gif');
        this.player1ImgBlock = loadImage('assets/chun-li-block.png')
        this.player2ImgPunch = loadImage('assets/ryu-punch-left.png');
        this.player2ImgKick = loadImage('assets/ryu-kick-left.png');
        this.player2ImgJump = loadImage('assets/ryu-jump-left.gif');
        this.player2ImgBlock = loadImage('assets/ryu-block-left.png');
    
    }

    setupGame() {
        //add components to the game
        this.background = new Background();
        this.background.image = this.backgroundImg;
        this.player1 = new Player('Chun Li', 80, 100, 100);
        this.player1.image = this.player1ImgRight;
        this.player1.direction = 'right';
        this.player2 = new Player('Ryu', 100, 80, width-200);
        this.player2.image = this.player2ImgLeft;
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
        }
        if(game.player2.health <= 0) {
            this.gamePhase = 3;
        }    
    }


}