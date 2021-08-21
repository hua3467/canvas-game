// import gameObject from "./gameObject.js";
// import Wallet from "./Wallet.js"

class Player extends gameObject {
    wallet = new Wallet();
    constructor(name, x, y, ctx){
        super(name, x, y);
        this.radius = 20;
        this.color = "red";
        this.draw(ctx);
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

    addCoin(num) {
        this.wallet.addCoin(num);
    }
}

// export default Player;