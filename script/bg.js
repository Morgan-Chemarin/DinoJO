class Bg {

    constructor() {

        this.randomDistance = Math.floor(random(100, 150))
        this.x = game.window_width + this.randomDistance;
        this.type = Math.floor(random(2))
        this.y = 255;
        console.log(this.type)

        switch (this.type) {
            case 0:
                this.w = 140;
                this.h = 264;
                this.img = game.sprite.get(1285, 2, 56, 106);
                break;
            case 1:
                this.w = 264;
                this.h = 264;
                this.img = game.sprite.get(1235, 130, 66, 60);
                break;
        }
    }

    update(speed) {
        this.x -= speed;
    }
    display() {
        image(this.img, this.x, this.y, this.w, this.h);
    }
}