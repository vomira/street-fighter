class Background {
    constructor() {
        this.image;
    }

    drawBackground() {
        image(this.image, 0, 0, width, height);
    }
}