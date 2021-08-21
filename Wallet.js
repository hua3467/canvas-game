class Wallet {
    coinNum = 0;

    addCoin(count) {
        this.coinNum += count;
    }
    reduceCoin(count) {
        this.coinNum -= count;
    }
    readCoin() {
        return this.coinNum;
    }
}

// export default Wallet;