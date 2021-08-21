// import Game from "./Game.js";

const game = new Game("#game");
const playerA = game.addPlayer("Aaron", 200, 200);
const currentScene = game.addScene("mainScene");
const secondScene = game.addScene("secondScene");

playerA.addEvent("click", thisPlayer => {
    playerA.addCoin(100);
    console.log(thisPlayer);
});

currentScene.addCoin(234, 122).addEvent("click", thisObject => {
    console.log(thisObject);
    thisObject.animate();
});

