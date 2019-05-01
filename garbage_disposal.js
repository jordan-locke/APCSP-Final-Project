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
        console.log("in startGame");
        if (startButton.style.visibility == "hidden") {
            console.log(this.currentTrash);
        } else {
            startButton.style.visibility = "hidden";
            document.getElementById("homepage").style.visibility = "hidden";
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
        let randomNumber = Math.ceil(Math.random() * 3);
        if (randomNumber == 3) {
            let randomPlastic = Math.floor(Math.random() * plastic3.length);
            this.currentTrash = plastic3[randomPlastic];
            console.log("in plastic");
            console.log(this.currentTrash);
        } else if (randomNumber == 2) {
            let randomCompost = Math.floor(Math.random() * compost2.length);
            this.currentTrash = compost2[randomCompost];
            console.log("in compost");
            console.log(this.currentTrash);
        } else if (randomNumber = 1) {
            let randomPaper = Math.floor(Math.random() * paper1.length);
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
        trashImage.classList.remove("paper");
        void trashImage.offsetWidth;
    }

    makeChoice(event) {
        console.log("in makeChoice");
        var key = event.key;
        let trash = document.getElementById("trash")
        if (key === "1") {
            //PAPER
            trash.classList.add("paper")
            this.playerChoice = "1";
        } else if (key === "2") {
            //COMPOST
            this.playerChoice = "2";
        } else if (key === "3") {
            //PLASTIC
            this.playerChoice = "3";
        }
        console.log(event.key);
        let that = this;
        setTimeout(function () {
            that.checkAnswer();
        }, 1000);
    }

    checkAnswer() {
        if (this.playerChoice == this.currentTrash.type) {
            this.correctAnswer = true;
        } else {
            this.correctAnswer = false;
        }
        console.log("player choice" + this.playerChoice);
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
        }
        console.log("score" + this.score);
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
            document.getElementById("homepage").style.visibility = "visible";
            document.getElementById("score-input").textContent = this.score;
            console.log(this.score);
        } else if (this.currentTrash.type == "2") {
            popUp.style.visibility = "visible";
            startButton.style.visibility = "visible";
            popUp.textContent = "Uh oh! This product belongs in the COMPOST bin.";
            popUp.style.backgroundColor = "darkseagreen";
            this.timer = 0;
            document.getElementById("homepage").style.visibility = "visible";
            document.getElementById("score-input").textContent = this.score;
            console.log(this.score);
        } else if (this.currentTrash.type == "3") {
            popUp.style.visibility = "visible";
            startButton.style.visibility = "visible";
            popUp.textContent = "Uh oh! This product belongs in the PLASTIC bin.";
            popUp.style.backgroundColor = "dodgerblue";
            this.timer = 0;
            document.getElementById("homepage").style.visibility = "visible";
            document.getElementById("score-input").textContent = this.score;
            console.log(this.score);
        }
    }

    runTimer() {
        let that = this;
        var countdown = setInterval(function () {
            that.timer--;
            document.getElementById("timer-input").textContent = that.timer;
            if (that.timer <= 0) {
                console.log("inside run timer statement");
                that.endGame(countdown);
            }
        }, 1000);

        that.logTimer();
        console.log(this.timer);
    }

    logTimer() {
        console.log("in logTimer");
        if (this.score >= 99) {
            console.log("this.score >= 99");
            this.timerMax = 1;
        } else if (this.score % 10 == 0 && this.score != 0) {
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
        if (document.getElementById("homepage").style.visibility == "visible") {
            console.log("homepage visible");
        } else {
            console.log("homepage hidden");
        }
        if (this.correctAnswer == true || this.correctAnswer == null) {
            document.getElementById("pop-up").style.backgroundColor = "crimson";
            document.getElementById("pop-up").style.visibility = "visible";
            document.getElementById("pop-up").textContent = "Time's Up! Game over.";
        }
        console.log("end endgame");
    }

    /* move() {
         var element = document.getElementById("current-trash");
         var xpos = this.currentTrash.xpos;
         var ypos = this.currentTrash.ypos;
         var id = setInterval(frame, 1);
         if (this.currentTrash.xpos < this.currentBin.xpos) {
             this.currentTrash.xstep;
             }
         if (this.currentTrash.ypos < this.currentBin.ypos) {
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
     } */

    /*   var id = setInterval(compostMove, 5);

   function compostMove() {
        if()
    }
*/
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
    constructor(_name, _photo, _type) {
        this.name = _name;
        this.photo = _photo;
        this.type = _type;
    }
    //render() {
    //  this.element.style.left = this.xpos + "px";
    //this.element.style.left = this.ypos + "px";
    // }
}




var waterBottle = new Trash("water bottle", "http://pngimg.com/uploads/bottle/bottle_PNG2087.png", 3);
var cup = new Trash("cup", "https://cdn.shopify.com/s/files/1/1034/4213/products/16oz_PET_450px_600x.png?v=1546480348", 3);
var yogurtCup = new Trash("yogurt cup", "https://i.ya-webdesign.com//images/transparent-packaging-yogurt.png", 3);
var waterJug = new Trash("water jug", "http://pngimg.com/uploads/water_bottle/water_bottle_PNG10148.png", 3);
var juiceJug = new Trash("juice jug", "https://s11284.pcdn.co/wp-content/uploads/2017/03/odwalla-orange-juice-250x250.png", 3);
var container = new Trash("container", "https://cdn-1.us.xmsymphony.com/4f82a65cc26a0c11e496900b34085e9f/contents/B08PCMRC32B/B08PCMRC32B.png", 3);
var bleach = new Trash("bleach", "https://www.thecloroxcompany.com/wp-content/uploads/regular-bleach-2-cloroxmax-hero-164x300.png", 3);

let plastic3 = [
    waterBottle,
    cup,
    yogurtCup,
    waterJug,
    juiceJug,
    container,
    bleach
]

var coffeeFilter = new Trash("coffee filter", "http://www.talproducts.com/media/catalog/product/cache/1/image/440x/9df78eab33525d08d6e5fb8d27136e95/c/o/coffee_filter_c08-bunncf_28.png", 2);
var teaBag = new Trash("tea bag", "https://www.pngkey.com/png/full/87-875612_tea-bag-png.png", 2);
var appleCore = new Trash("apple core", "https://i.dlpng.com/static/png/3881069_thumb.png", 2);
var avocadoRind = new Trash("avocado rind", "http://pngriver.com/wp-content/uploads/2017/11/Avocado-PNG-transparent-images-free-download-clipart-pics-avocados-001.png", 2);
var orangePeel = new Trash("orange peel", "http://assets.stickpng.com/thumbs/5a68f916988f2a795ef76ce3.png", 2);
var eggShells = new Trash("egg shells", "http://www.stickpng.com/assets/thumbs/5c570e158c21c9029a0f48c1.png", 2);
var coffeeGrounds = new Trash("coffee-grounds", "https://i.pinimg.com/originals/c1/94/e9/c194e9096fce9d44b7308c33b3891e5a.png", 2);
var breadLoaf = new Trash("bread-loaf", "https://pngimg.com/uploads/bread/bread_PNG2281.png", 2);
var nuts = new Trash("nuts", "https://www.lmcarter.com/wp-content/uploads/2016/02/Industries-Peanuts.png", 2);
var wineCorks = new Trash("wine-corks", "https://morebeer-web-9-pavinthewaysoftw.netdna-ssl.com/product_image/morebeer/500x500/22768.png", 2);
var cupcakeWrapper = new Trash("cupcake-wrapper", "https://webshop.vanderwindt.ie/static/uploads/pictures/large/VWIE_14219.png", 2);
var cottonBalls = new Trash("cotton-balls", "https://www.dufortlavigne.com/system/produits/images/MEDMDS21460-large.png?1401285288", 2);
var shreddedPaper = new Trash("shredded-paper", "https://benkallos.com/sites/default/files/shreddedpaper-300x264.png", 2);
var twine = new Trash("twine", "https://sitejerk.com/images/twine.png", 2);
var grass = new Trash("grass", "https://happylawncare.com/wp-content/uploads/2014/08/Grass-Clipping-mulch.png", 2);

let compost2 = [
    coffeeFilter,
    teaBag,
    appleCore,
    avocadoRind,
    orangePeel,
    eggShells,
    coffeeGrounds,
    breadLoaf,
    nuts,
    wineCorks,
    cupcakeWrapper,
    cottonBalls,
    shreddedPaper,
    twine,
    grass
]

var bigBox = new Trash("big box", "https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/02/cardboard-box-transparent-image.png?fit=708%2C686", 1);
var smallBox = new Trash("small box", "https://sc01.alicdn.com/kf/HTB10DVLKVXXXXb2XXXX760XFXXXa/Custom-drawer-shape-shoe-box-packaging.png_350x350.png", 1);
var flatPaper = new Trash("flat paper", "https://www.menushoppe.com/shop/images/th2_blankpaper_main_category2.png", 1);
var tissue = new Trash("tissue", "https://cdn.shopify.com/s/files/1/0987/6664/products/IMG_1070_edited_360x.png?v=1514382512", 1);
var cardboardTube = new Trash("cardboard tube", "http://pluspng.com/img-png/toilet-roll-png-hd-toilet-paper-roll-empty-620.png", 1);
var envelope = new Trash("envelope", "https://cdn.shopify.com/s/files/1/1005/0822/products/Navis-Envelope-ISO_large.png?v=1455580789", 1);
var cardboardSheet = new Trash("cardboard-sheet", "https://smhttp-ssl-80457.nexcesscdn.net/media//amasty/shopby/page_images/corrugated-cardboard-sheets.png", 1);
var magazine = new Trash("magazine", "https://sitejerk.com/images/periodical-1.png", 1);
var newspaper = new Trash("newspaper", "https://i.pinimg.com/originals/c7/17/27/c7172786c59b2a5634bcf454e007c3c0.png", 1);
var cerealBox = new Trash("cereal-box", "https://i.ya-webdesign.com//images/cereal-box-png-3.png", 1);
var milkCarton = new Trash("milk-carton", "http://harmonyorganic.ca/images/products/originals/Cartons/1_Carton/Organic-Whole_Milk-1L-Carton-1.png", 1);
var manilaFolder = new Trash("manila-folder", "https://www.pngkey.com/png/full/166-1663158_manila-end-tab-folders-manila-folder.png", 1);

let paper1 = [
    bigBox,
    smallBox,
    flatPaper,
    tissue,
    cardboardTube,
    envelope,
    cardboardSheet,
    magazine,
    newspaper,
    cerealBox,
    milkCarton,
    manilaFolder
]



let game = new Game();

let startButton = document.getElementById("start-button");
//let restartButton = document.getElementById("restart-game");

startButton.addEventListener("click", () => {
    game.startGame();
});

window.addEventListener("keydown", (e) => {
    if (game.endOfGame == false) {
        game.makeChoice(event);
    }
});

/*restartButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});*/
