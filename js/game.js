class Game {
    constructor() {

    }

    preloadGame() {
        //preload images
        this.backgroundImg = loadImage('../assets/background_arena.jpg');
        this.player1Img = loadImage('../assets/chun-li-stand-1.png');
        this.player2Img = loadImage('../assets/ryu-starter.png')
    }

    setupGame() {
        //add components to the game
        this.background = new Background();
        this.background.image = this.backgroundImg;
        this.player1 = new Player('Chun Li', 80, 100, 100);
        this.player1.image = this.player1Img;
        this.player2 = new Player('Ryu', 100, 80, width-200);
        this.player2.image = this.player2Img;

    }

    drawGame() {
        this.background.drawBackground();
        this.player1.drawPlayer();
        this.player2.drawPlayer();

        //draw components
    }

    isGameFinished() {
        if(game.player1.health <= 0) {
            setTimeout(function() {
            alert(`${game.player2.name} is the glorious winner!`)}, 300);
        }
        if(game.player2.health <= 0) {
            setTimeout(function() {
            alert(`${game.player1.name} is the glorious winner!`)}, 300);
        }
    }
}