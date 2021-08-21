class Scene {
    coins = [];
    id = Date.now();
    objects = {};
    constructor(name, ctx) {
        this.name = name;
        this.ctx = ctx
    };
    changeName(newName) {
        this.name = newName;
    }
    setCoins(amount) {
        this.coinCount += amount;
    }
    addCoin(x, y) {
        const newCoin = new Coin(x, y, this.ctx);
        this.coins.push(newCoin);
        return newCoin;
    }
    addObject(name, selector) {
        const newObj = new Object(name, selector);
        this.objects.id = newObj;
    }
}

// export default Scene;