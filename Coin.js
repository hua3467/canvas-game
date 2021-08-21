class Coin extends gameObject {
    constructor(x, y, ctx){
        super("coin", x, y);
        this.radius = 20;
        this.color = "yellow";
        this.ctx = ctx;
        this.draw(this.ctx);
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
    }

    animate() {
        const loop = setInterval(() => {
            this.update({x: 10, y: -10});
            if (this.x >= window.innerWidth || this.y >= window.innerHeight) {
                clearInterval(loop);
            }
        }, 5);
    
    }

}