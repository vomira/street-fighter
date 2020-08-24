class Player {
    constructor(name, strength, stamina, x) {
        this.name = name;
        this.strength = strength;
        this.stamina = stamina;
        this.image;
        this.height = 200;
        this.width = width/6;
        this.gravity = 0.3;
        this.velocity = 0;
        this.x = x;
        this.y = height/2;
    }

    drawPlayer() {
        //velocity would always pull the figure down (adding to y)
        this.velocity += this.gravity;
        this.y += this.velocity;
        //this prevents figure from going off the screen to the bottom
        if(this.y >= height/2) {
          this.y = height/2;
        }

        image(this.image, this.x, this.y, this.height, this.width);
        // draw the player + jump logic with velocity
      }
    
      // add a jump function
      jump() {
        console.log('jump!')
        if(this.y === height/2) {
        //by velocity being negative, y is being reduced until velocity reaches 0, then y is increased again until it reaches the bottom
        this.velocity = -15;
      }
      }
    }
