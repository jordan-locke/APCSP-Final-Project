class Game {
    constructor() {
        this.player = new Player();
        this.score = 0;
        this.timer = 10;
        this.plastic1 = [];
        this.compost2 = [];
        this.paper3 = [];
        this.currentTrash = null;
    }

    pickRandomTrash() {
        let randomNumber = Math.ceil(Math.random()*3);
        if (randomNumber == 1) {
            let randomPlastic = Math.floor(Math.random()*this.plastic1.length);
            this.currentTrash = this.plastic1[randomPlastic];
        } else if (randomNumber == 2) {
            let randomCompost = Math.floor(Math.random()*this.compost2.length);
            this.currentTrash = this.compost2[randomCompost];
        } else {
            let randomPaper = Math.floor(Math.random()*this.paper3.length);
            this.currentTrash = this.paper3[randomPaper];
        }
    }

    addToScore() {
        this.score = this.score + 1;
    }

    logTimer() {
        document.getElementById("scoreboard");
    }
}
