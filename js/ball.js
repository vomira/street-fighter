class Ball {
    constructor(x) {
        this.x = x;
        this.y = height/2;
        this.direction;
        this.ballImage;
        this.height = height/6;
        this.width = width/6;
    }

    drawBall() {
        image(this.ballImage, this.x, this.y, this.height, this.width);
    }
}