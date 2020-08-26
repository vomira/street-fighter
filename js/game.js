class Game {
    constructor() {
        this.gamePhase = 0;
    }

    preloadGame() {
        //preload images
        this.backgroundImg = loadImage('assets/background_arena.jpg');
        this.player1Img = loadImage('assets/chun-li-standing.gif');
        this.player2Img = loadImage('assets/ryu-standing.gif');
        this.player1ImgPunch = loadImage('assets/chun-li-punch.gif');
        this.player2ImgPunch = loadImage('assets/ryu-punching.gif');
        this.player2ImgKick = loadImage('assets/ryu-kick.gif')
    }

    setupGame() {
        //add components to the game
        this.background = new Background();
        this.background.image = this.backgroundImg;
        this.player1 = new Player('Chun Li', 80, 100, 100);
        this.player1.image = this.player1Img;
        this.player2 = new Player('Ryu', 100, 80, width-200);
        this.player2.image = this.player2Img;
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

        //draw components
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