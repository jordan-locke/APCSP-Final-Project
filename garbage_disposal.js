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
            document.getElementById("homepage").style.visibility = "hidden";
            this.endOfGame = false;
            this.timer = 10;
            this.score = 0;
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
        let trash = document.createElement("div");
        trash.setAttribute("id", "trash");
        let currentTrash = document.createElement("img");
        trash.appendChild(currentTrash);
        let choice = document.getElementById("choice");
        choice.appendChild(trash);

        //let trashImage = document.getElementById("current-trash");
        //trashImage.src = null;
        //trashImage.style.visibility = "visible";
        //console.log(trashImage.src);
        currentTrash.src = this.currentTrash.photo;
        //console.log(trashImage.src);
        //trashImage.classList.remove("trash");
        //void trashImage.offsetWidth;
    }

    makeChoice(event) {
        console.log("in makeChoice");
        var key = event.key;
        let trash = document.getElementById("trash")
        if (key === "1") {
            //PAPER
            trash.classList.add("paper");
            this.playerChoice = "1";
        } else if (key === "2") {
            //COMPOST
            trash.classList.add("compost");
            this.playerChoice = "2";
        } else if (key === "3") {
            //PLASTIC
            trash.classList.add("plastic");
            this.playerChoice = "3";
        }
        console.log(event.key);
        let that = this;
        setTimeout(function () {
            that.checkAnswer();
            trash.parentNode.removeChild(trash);
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
        console.log("in logTimer", this.timer);
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

<<<<<<< HEAD
var waterBottle = new Trash(0, 0, 0, 0, "water bottle", "https://4.imimg.com/data4/EU/YB/MY-6282801/normal-plastic-bottle-500x500.jpg", 3, "water-bottle");
var cup = new Trash(0, 0, 0, 0, "cup", "https://sc02.alicdn.com/kf/UT8D0v_XthaXXagOFbX6/Wholelsale-Disposable-PET-Plastic-Cup-with-lids.jpg", 3, "cup");
var packaging = new Trash(0, 0, 0, 0, "packaging", "https://i5.walmartimages.com/asr/ad65e07f-a701-41f3-8a20-357ed5507e84_1.827c65affb84303b7d2c64a5732a4681.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", 3, "packaging");
var yogurtCup = new Trash(0, 0, 0, 0, "yogurt cup", "https://oembargain.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/15s-b_1.jpg", 3, "yogurt-cup");
var waterJug = new Trash(0, 0, 0, 0, "water jug", "https://images-na.ssl-images-amazon.com/images/I/41geyS%2B3FwL.jpg", 3, "water-jug");
var juiceJug = new Trash(0, 0, 0, 0, "juice jug", "http://ecx.images-amazon.com/images/I/310tRm6gYsL.jpg", 3, "juice-jug");
var container = new Trash(0, 0, 0, 0, "container", "http://www.castawayfoodpackaging.com.au/wp-content/uploads/CA-CM650_WEB_A.png", 3, "food-container");
var plasticTube = new Trash(0, 0, 0, 0, "plastic tube", "https://cdn.shopify.com/s/files/1/2612/8356/products/plastic-tubes-for-vape-cartridges-12mm-x-85mm-packaging-container-white-4011282104402.jpg?v=1547475054", 3, "plastic-tube");
=======



var waterBottle = new Trash("water bottle", "http://pngimg.com/uploads/bottle/bottle_PNG2087.png", 3);
var cup = new Trash("cup", "https://cdn.shopify.com/s/files/1/1034/4213/products/16oz_PET_450px_600x.png?v=1546480348", 3);
var yogurtCup = new Trash("yogurt cup", "https://i.ya-webdesign.com//images/transparent-packaging-yogurt.png", 3);
var waterJug = new Trash("water jug", "http://pngimg.com/uploads/water_bottle/water_bottle_PNG10148.png", 3);
var juiceJug = new Trash("juice jug", "https://s11284.pcdn.co/wp-content/uploads/2017/03/odwalla-orange-juice-250x250.png", 3);
var container = new Trash("container", "https://cdn-1.us.xmsymphony.com/4f82a65cc26a0c11e496900b34085e9f/contents/B08PCMRC32B/B08PCMRC32B.png", 3);
var bleach = new Trash("bleach", "https://www.thecloroxcompany.com/wp-content/uploads/regular-bleach-2-cloroxmax-hero-164x300.png", 3);
>>>>>>> origin/master

let plastic3 = [
    waterBottle,
    cup,
    yogurtCup,
    waterJug,
    juiceJug,
    container,
    bleach
]

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/master

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

<<<<<<< HEAD
var bigBox = new Trash(0, 0, 0, 0, "big box", "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/VISSC280_shipping_carton_280_x_255_x_215mm_15_pack.jpg", 1, "big-box");
var smallBox = new Trash(0, 0, 0, 0, "small box", "https://ae01.alicdn.com/kf/HTB1PtLMIpXXXXb8XpXXq6xXFXXXA/Carton-Box-Paper-Boxes-Neoprene-Swimwear-Bikini-Clothing-Packing-Boxes-Anti-Wrinkle-Hard-Brown-color.jpg_640x640.jpg", 1, "small-box");
//var crumpledPaper = new Trash("crumpled paper", "https://media.gettyimages.com/photos/crumpled-paper-ball-picture-id182906514?b=1&k=6&m=182906514&s=612x612&w=0&h=AWrFkSlsZWxmmr_vxmi94ABPCNIHgXAiHvnfejYCei8=", 1);
var flatPaper = new Trash(0, 0, 0, 0, "flat paper", "https://cdn1.bigcommerce.com/server4300/c7561/products/73/images/1735/paper_sheet__41145.1424302341.380.380.jpg?c=2", 1, "flat-paper");
var tissue = new Trash(0, 0, 0, 0, "tissue", "https://img1.exportersindia.com/product_images/bc-full/dir_5/126172/tissue-paper-1521700403-76103.jpeg", 1, "tissue");
var cardboardTube = new Trash(0, 0, 0, 0, "cardboard tube", "https://housewifehowtos.com/wp-content/uploads/2012/05/toilet-paper-cardboard-tube.jpg", 1, "cardboard-tube");
var envelope = new Trash(0, 0, 0, 0, "envelope", "https://s3.amazonaws.com/static.lcipaper.com/img/prod/AGD7E-OUTmed.png", 1, "envelope");
var card = new Trash(0, 0, 0, 0, "card", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/LeibnizBrief1.jpg/200px-LeibnizBrief1.jpg", 1, "card");
var paperAirplane = new Trash(0, 0, 0, 0, "paper airplane", "http://activehistory.ca/wp-content/uploads/2018/05/1024px-Paperairplane-1024x573.png", 1, "paper-airplane");
=======
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
>>>>>>> origin/master

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

startButton.addEventListener("click", () => {
    game.startGame();
});

window.addEventListener("keydown", (e) => {
    if (game.endOfGame == false) {
        game.makeChoice(event);
    }
});
