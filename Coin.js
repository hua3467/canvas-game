class Coin extends GameObject {
    constructor(x, y, ctx){
        super("coin", x, y);
        this.radius = 20;
        this.color = "yellow";
        this.ctx = ctx;
        this.draw(this.ctx);
        this.image = null;
        this.addImage("./coin.png");
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    addEvent(eventName, callback) {
        new UiEvent(this, eventName, callback, this);
    }

    update(velocity) {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.x += velocity.x;
        this.y += velocity.y;
        this.draw(this.ctx);
        this.addImage("./coin.png");
    }

    animate() {
        const loop = setInterval(() => {
            this.update({x: 5, y: 5});
            if (this.x >= window.innerWidth || this.y >= window.innerHeight) {
                clearInterval(loop);
            }
        }, 100);
    
    }

    addImage(source){
        this.image = new Image(40, 40);
        this.image.src = source;
        this.image.onload = () => {
            this.ctx.drawImage(this.image, this.x - 20, this.y - 20);
        }
    }

}