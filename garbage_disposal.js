class Game {
    constructor() {
        this.player = new Player();
        this.score = 0;
        this.timer = 10;
        this.timerMax = 10;
        this.correctAnswer = null;
        this.currentTrash = null;
        this.playerChoice = null;
        this.endOfGame = false;
    }

    startGame() {
        console.log("in startGame", this.timer);
        if (startButton.style.visibility == "hidden") {
            console.log(this.currentTrash);
        } else {
            startButton.style.visibility = "hidden";
            this.endOfGame = false;
            this.timer = 10;
            document.getElementById("score-input").textContent = "0";
            document.getElementById("timer-input").textContent = "10";
            document.getElementById("pop-up").style.visibility = "hidden";
            this.pickRandomTrash();
            this.runTimer();
        }
    }

    pickRandomTrash() {
        this.currentTrash = null;
        let randomNumber = Math.ceil(Math.random()*3);
        if (randomNumber == 3) {
            let randomPlastic = Math.floor(Math.random()*plastic3.length);
            this.currentTrash = plastic3[randomPlastic];
            console.log("in plastic");
            console.log(this.currentTrash);
        } else if (randomNumber == 2) {
            let randomCompost = Math.floor(Math.random()*compost2.length);
            this.currentTrash = compost2[randomCompost];
            console.log("in compost");
            console.log(this.currentTrash);
        } else if (randomNumber = 1) {
            let randomPaper = Math.floor(Math.random()*paper1.length);
            this.currentTrash = paper1[randomPaper];
            console.log("in paper");
            console.log(this.currentTrash);
        }

        this.displayTrashImage();
    }

     displayTrashImage() {
        console.log("in displayImage");
        let trashImage = document.getElementById("current-trash");
        trashImage.src = null;
        trashImage.style.visibility = "visible";
        console.log(trashImage.src);
        trashImage.src = this.currentTrash.photo;
        console.log(trashImage.src);
    }

    makeChoice(event) {
        console.log("in makeChoice");
        var key = event.key;
        if (key === "1") {
            //PAPER
            this.playerChoice = "1";
        } else if (key === "2") {
            //COMPOST
            this.playerChoice = "2";
        } else if (key === "3") {
            //PLASTIC
            this.playerChoice = "3";
        }
        console.log(event.key);
        this.checkAnswer();
    }

    checkAnswer() {
        if (this.playerChoice == this.currentTrash.type){
        this.correctAnswer = true;
        } else {
        this.correctAnswer = false;
        }console.log("player choice" + this.playerChoice);
        console.log("current trash" + this.currentTrash.type);
        console.log(this.correctAnswer);
        this.addToScore();
    }

    addToScore() {
        let scoreInput = document.getElementById("score-input");
        if (this.correctAnswer == true) {
            console.log("inside addtoscore true");
            this.score = this.score + 1;
            this.pickRandomTrash();
            this.logTimer();
        } else {
            this.addPopUp();
        } console.log("score" + this.score);
        scoreInput.textContent = this.score;
    }

    addPopUp() {
        let popUp = document.getElementById("pop-up");
        popUp.textContent = null;
        console.log("addPopUp current trash type" + " " + this.currentTrash.type);
        if (this.currentTrash.type == "1") {
            popUp.style.visibility = "visible";
            startButton.style.visibility = "visible";
            popUp.textContent = "Uh oh! This product belongs in the PAPER bin.";
            popUp.style.backgroundColor = "burlywood";
            this.timer = 0;
        } else if (this.currentTrash.type == "2") {
            popUp.style.visibility = "visible";
            startButton.style.visibility = "visible";
            popUp.textContent = "Uh oh! This product belongs in the COMPOST bin.";
            popUp.style.backgroundColor = "darkseagreen";
            this.timer = 0;
        } else if (this.currentTrash.type == "3") {
            popUp.style.visibility = "visible";
            startButton.style.visibility = "visible";
            popUp.textContent = "Uh oh! This product belongs in the PLASTIC bin.";
            popUp.style.backgroundColor = "dodgerblue";
            this.timer = 0;
        }
    }

    runTimer() {
        let that = this;
        var countdown = setInterval(function() {
            that.timer--;
            document.getElementById("timer-input").textContent = that.timer;
            if(that.timer <= 0) {
                console.log("inside run timer statement");
                that.endGame(countdown);
            }
            }, 1000);

            that.logTimer();
        console.log(this.timer);
    }

    logTimer() {
        console.log("in logTimer", this.timer);
        if (this.score >= 99) {
            console.log("this.score >= 99");
            this.timerMax = 1;
        } else if (this.score % 10 == 0 && this.score != 0){
            console.log("this.score % 10");
            this.timerMax = this.timerMax - 1;
        } else if (this.correctAnswer == true) {
            this.timer = this.timerMax;
            console.log("correctAnswer", this.timer);
        }
        console.log("end of logTimer", this.timer);
    }

    endGame(id) {
        console.log("in endgame");
        clearInterval(id);
        document.getElementById("timer-input").textContent = "0";
        this.endOfGame = true;
        startButton.style.visibility = "visible";
        if (this.correctAnswer == true || this.correctAnswer == null) {
        document.getElementById("pop-up").style.backgroundColor = "crimson";
        document.getElementById("pop-up").style.visibility = "visible";
        document.getElementById("pop-up").textContent = "Time's Up! Game over.";
        }
    }

    move() {
        var element = document.getElementById("current-trash");
        var xpos = this.currentTrash.xpos;
        var ypos = this.currentTrash.ypos;
        var id = setInterval(frame, 1);
        if (this.currentTrash.xpos < /*this.currentBin.xpos*/) {
            this.currentTrash.xstep;
            }
        if (this.currentTrash.ypos < /*this.currentBin.ypos*/) {
            this.currentTrash.ystep;
            }
        this.currentTrash.xpos = this.currentTrash.xpos + this.currentTrash.xstep;
        this.currentTrash.ypos = this.currentTrash.ypos + this.currentTrash.ystep;
        this.currentTrash.render();
    }

    answerAnimation() {
        if (this.correctAnswer == true) {
          if (this.currentTrash.xpos === this.) {

              clearInterval(id);

         }
        }
    }

}


class Player {
    constructor(_name, _highscore, _choice) {
        this.name = _name;
        this.highScore = _highscore;
        this.choice = _choice;
    }

    playerName() {
       // TODO
   }
}




class Trash {
    constructor(_xpos, _xstep, _ypos, _ystep, _name, _photo, _type, _id) {
        this.xpos = _xpos;
        this.xstep = _xstep;
        this.ypos = _ypos;
        this.ystep = _ystep;
        this.name = _name;
        this.photo = _photo;
        this.type = _type;
        this.element = document.getElementById(_id)
    }
    render() {
        this.element.style.left = this.xpos + "px";
        this.element.style.left = this.ypos + "px";
    }
}

var waterBottle = new Trash(0, 0, 0, 0, "water bottle", "https://4.imimg.com/data4/EU/YB/MY-6282801/normal-plastic-bottle-500x500.jpg", 3, "water-bottle");
var cup = new Trash(0, 0, 0, 0, "cup", "https://sc02.alicdn.com/kf/UT8D0v_XthaXXagOFbX6/Wholelsale-Disposable-PET-Plastic-Cup-with-lids.jpg", 3, "cup");
var packaging = new Trash(0, 0, 0, 0, "packaging", "https://i5.walmartimages.com/asr/ad65e07f-a701-41f3-8a20-357ed5507e84_1.827c65affb84303b7d2c64a5732a4681.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", 3, "packaging");
var yogurtCup = new Trash(0, 0, 0, 0, "yogurt cup", "https://oembargain.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/15s-b_1.jpg", 3, "yogurt-cup");
var waterJug = new Trash(0, 0, 0, 0, "water jug", "https://images-na.ssl-images-amazon.com/images/I/41geyS%2B3FwL.jpg", 3, "water-jug");
var juiceJug = new Trash(0, 0, 0, 0, "juice jug", "http://ecx.images-amazon.com/images/I/310tRm6gYsL.jpg", 3, "juice-jug");
var container = new Trash(0, 0, 0, 0, "container", "http://www.castawayfoodpackaging.com.au/wp-content/uploads/CA-CM650_WEB_A.png", 3, "food-container");
var plasticTube = new Trash(0, 0, 0, 0, "plastic tube", "https://cdn.shopify.com/s/files/1/2612/8356/products/plastic-tubes-for-vape-cartridges-12mm-x-85mm-packaging-container-white-4011282104402.jpg?v=1547475054", 3, "plastic-tube");

let plastic3 = [
    waterBottle,
    cup,
    packaging,
    yogurtCup,
    waterJug,
    juiceJug,
    container,
    plasticTube
]

var bananaPeel = new Trash(0, 0, 0, 0, "banana peel", "https://www.thedailymeal.com/sites/default/files/story/2016/bananapeel.JPG", 2, "banana-peel");
var coffeeFilter = new Trash(0, 0, 0, 0, "coffee filter", "https://www.sciencedaily.com/images/2015/05/150513112035_1_900x600.jpg", 2, "coffee-filter");
var teaBag = new Trash(0, 0, 0, 0, "tea bag", "https://cdn.shopify.com/s/files/1/0654/3125/products/TB_b6af5482-c6ec-47b1-ab2f-adc20f69d12a_grande.jpg?v=1426877660", 2, "tea-bag");
var appleCore = new Trash(0, 0, 0, 0, "apple core", "https://progressive.org/downloads/5300/download/rotten%20apple%20.jpg.jpe?cb=c4a7db57c9e999ed5e304327da730ae3", 2, "apple-core");
var avocadoRind = new Trash(0, 0, 0, 0, "avocado rind", "https://daily.jstor.org/wp-content/uploads/2017/05/avocado_1050x700.jpg", 2, "avocado");
var orangePeel = new Trash(0, 0, 0, 0, "orange peel", "http://assets.stickpng.com/thumbs/5a68f916988f2a795ef76ce3.png", 2, "orange-peel");
var leaf = new Trash(0, 0, 0, 0, "leaf", "https://www.ctfresh.com.sg/wp-content/uploads/2017/11/177130309.jpg", 2, "leaf");
var stick = new Trash(0, 0, 0, 0, "stick", "http://www.stickpng.com/assets/images/580b585b2edbce24c47b26c7.png", 2, "stick");
var dirt = new Trash(0, 0, 0, 0, "dirt", "https://static.canadiancattlemen.ca/wp-content/uploads/2015/02/153935374.jpg", 2, "dirt");
var eggShells = new Trash(0, 0, 0, 0, "egg shells", "http://www.stickpng.com/assets/thumbs/5c570e158c21c9029a0f48c1.png", 2, "egg-shells");

let compost2 = [
    bananaPeel,
    coffeeFilter,
    teaBag,
    appleCore,
    avocadoRind,
    orangePeel,
    leaf,
    stick,
    dirt,
    eggShells,
]

var bigBox = new Trash(0, 0, 0, 0, "big box", "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/VISSC280_shipping_carton_280_x_255_x_215mm_15_pack.jpg", 1, "big-box");
var smallBox = new Trash(0, 0, 0, 0, "small box", "https://ae01.alicdn.com/kf/HTB1PtLMIpXXXXb8XpXXq6xXFXXXA/Carton-Box-Paper-Boxes-Neoprene-Swimwear-Bikini-Clothing-Packing-Boxes-Anti-Wrinkle-Hard-Brown-color.jpg_640x640.jpg", 1, "small-box");
//var crumpledPaper = new Trash("crumpled paper", "https://media.gettyimages.com/photos/crumpled-paper-ball-picture-id182906514?b=1&k=6&m=182906514&s=612x612&w=0&h=AWrFkSlsZWxmmr_vxmi94ABPCNIHgXAiHvnfejYCei8=", 1);
var flatPaper = new Trash(0, 0, 0, 0, "flat paper", "https://cdn1.bigcommerce.com/server4300/c7561/products/73/images/1735/paper_sheet__41145.1424302341.380.380.jpg?c=2", 1, "flat-paper");
var tissue = new Trash(0, 0, 0, 0, "tissue", "https://img1.exportersindia.com/product_images/bc-full/dir_5/126172/tissue-paper-1521700403-76103.jpeg", 1, "tissue");
var cardboardTube = new Trash(0, 0, 0, 0, "cardboard tube", "https://housewifehowtos.com/wp-content/uploads/2012/05/toilet-paper-cardboard-tube.jpg", 1, "cardboard-tube");
var envelope = new Trash(0, 0, 0, 0, "envelope", "https://s3.amazonaws.com/static.lcipaper.com/img/prod/AGD7E-OUTmed.png", 1, "envelope");
var card = new Trash(0, 0, 0, 0, "card", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/LeibnizBrief1.jpg/200px-LeibnizBrief1.jpg", 1, "card");
var paperAirplane = new Trash(0, 0, 0, 0, "paper airplane", "http://activehistory.ca/wp-content/uploads/2018/05/1024px-Paperairplane-1024x573.png", 1, "paper-airplane");

let paper1 = [
    bigBox,
    smallBox,
    //crumpledPaper,
    flatPaper,
    tissue,
    cardboardTube,
    envelope,
    card,
    paperAirplane,
]



let game = new Game();

let startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
    game.startGame();
});

window.addEventListener("keydown", (e) => {
    if(game.endOfGame == false){
        game.makeChoice(event);
    }
});
