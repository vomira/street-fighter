class Player {
    constructor(name, strength, stamina, x) {
        this.name = name;
        this.strength = strength;
        this.stamina = stamina;
        this.staminaMax = stamina;
        this.health = 100;
        this.image;
        this.height = height/6;
        this.width = width/6;
        this.gravity = 0.3;
        this.velocity = 0;
        this.x = x;
        this.y = height/2;
        this.blocked = false;
        this.direction;
        this.opacity = 0;
    }

    drawPlayer(otherPlayer) {
        //velocity would always pull the figure down (adding to y)
        this.velocity += this.gravity;
        this.y += this.velocity;
        //this prevents figure from going off the screen to the bottom
        if(this.y >= height/2) {
          this.y = height/2;
        }
        push();
        fill(200, 50, 50, this.opacity);
        noStroke();
        rect(this.x, this.y, this.height, this.width, 10);
        pop();
        image(this.image, this.x, this.y, this.height, this.width);
        // draw the player + jump logic with velocity
      }

      collision(otherPlayer) {
        let p1X = this.x + this.width;
        let p1Y = this.y + this.height;
        let p2X = otherPlayer.x + otherPlayer.width;
        let p2Y = otherPlayer.y + otherPlayer.height;
        
        if (dist(p1X, p1Y, p2X, p2Y) < 100) {
          return true;
          console.log(true);
        }
      }

      jump() {
        console.log('jump!')
        if(this.y === height/2) {
        //by velocity being negative, y is being reduced until velocity reaches 0, then y is increased again until it reaches the bottom
        this.velocity = -10;
      }
      }

      moveLeft() {
        if(this.x > 100) {
            this.x -= 20;
        }
      }

      moveRight() {
        if(this.x < width - 200) {
            this.x += 20;
        }
      } 

      block() {
          this.stamina -= 0.1;
          return this.blocked = true;
        }


      kick(otherPlayer) {
        if(this.collision(otherPlayer) && !otherPlayer.blocked && this.stamina >= 10) {
          otherPlayer.opacity = 100;
          setTimeout(() => {
            otherPlayer.opacity = 0
          }, 100)
          otherPlayer.health -= this.strength/20;
        }
        if(this.stamina >= 10) {
          this.stamina -= 10
        };
      }

      punch(otherPlayer) {
        if(this.collision(otherPlayer) && !otherPlayer.blocked && this.stamina >= 10) {
          otherPlayer.opacity = 100;
          setTimeout(() => {
            otherPlayer.opacity = 0
          }, 100);
          otherPlayer.health -= this.strength/20;
        }
        if(this.stamina >= 10) {
          this.stamina -= 10
        };
       
      }

      specialAttack(otherPlayer) {
        console.log('special attack called!')
        if(this.stamina >= 20) {
          this.stamina -= 20;
        };
        if(this.stamina > -1) {
          otherPlayer.health -= this.strength/10;
          otherPlayer.opacity = 100;
          setTimeout(() => {
            otherPlayer.opacity = 0
          }, 100);
        }
       
      }

      staminaReload() {
        if(this.stamina < this.staminaMax)
        this.stamina += 2;
      }
      setPlayerDirection(otherPlayer) {
        if(this.x < otherPlayer.x) {
            this.direction = 'right';
        } else {
            this.direction = 'left';
        }
    }
    }
