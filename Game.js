// import Player from "./Player.js";
// import Scene from "./Scene.js";

class Game {
    
    scenes = [];
    players = [];
    currentScene = null;
    gameCanvas = null;
    ctx = null;

    constructor(selector) {
        this.createCanvas(selector);
    }

    createCanvas(selector){
        this.gameCanvas = document.querySelector(selector);
        this.gameCanvas.height = document.body.clientHeight;
        this.gameCanvas.width = document.body.clientWidth;
        this.ctx = this.gameCanvas.getContext("2d");
    }
    
    addPlayer(name, x, y) {
        const newPlayer = new Player(name, x, y, this.ctx)
        this.players.push(newPlayer);
        return newPlayer;
    }
    addScene(name) {
        const newScene = new Scene(name, this.ctx);
        this.scenes.push(newScene);
        return newScene;
    }

    setCurrentScene(sceneName){
        this.currentScene = this.scenes.filter((scene) => scene.name === sceneName)[0];
    }

    getCurrentScene(){
        return this.currentScene;
    }

    getPlayerByName(name) {
        return this.players.filter((player) => player.name === name)[0];
    }
    getSceneByName(name) {
        return this.scenes.filter((scene) => scene.name === name)[0];
    }

    getPlayerById(id) {
        return this.players.filter((player) => player.id === id)[0];
    }
    getSceneById(id) {
        return this.scenes.filter((scene) => scene.id === id)[0];
    }

}

// export default Game;