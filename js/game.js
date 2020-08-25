class Game {
    constructor() {

    }

    preloadGame() {
        //preload images
        this.backgroundImg = loadImage('../assets/background_arena.jpg');
        this.player1Img = loadImage('../assets/chun-li-standing.gif');
        this.player2Img = loadImage('../assets/ryu-standing.gif')
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
            setTimeout(function() {
            alert(`${game.player2.name} is the glorious winner!`)}, 300);
        }
        if(game.player2.health <= 0) {
            setTimeout(function() {
            alert(`${game.player1.name} is the glorious winner!`)}, 300);
        }
    }
}