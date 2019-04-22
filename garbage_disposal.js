class Game {
    constructor() {
        this.player = new Player();
        this.score = 0;
        this.timer = 10;
        this.plastic1 = [];
        this.compost2 = [];
        this.paper3 = [];
        this.currentTrash = null;
        this.playerChoice = null;
        window.addEventListener("keydown", playerChoice);
    }

    pickRandomTrash() {
        let randomNumber = Math.ceil(Math.random()*3);
        if (randomNumber == 1) {
            let randomPlastic = Math.floor(Math.random()*this.plastic1.length);
            this.currentTrash = this.plastic1[randomPlastic];
            console.log(this.currentTrash);
        } else if (randomNumber == 2) {
            let randomCompost = Math.floor(Math.random()*this.compost2.length);
            this.currentTrash = this.compost2[randomCompost];
            console.log(this.currentTrash);
        } else if (randomNumber = 3) {
            let randomPaper = Math.floor(Math.random()*this.paper3.length);
            this.currentTrash = this.paper3[randomPaper];
            console.log(this.currentTrash);
        }
    }

    postTrashImage() {
        let trash = document.getElementById("current-trash");
        trash.appendChild(this.currentTrash);
    }



    playerChoice() {
        if (event.keyCode === 37) {
            //paper
            this.playerChoice = 3;
        } else if (event.keyCode === 38) {
            //compost
            this.playerChoice = 2;
        } else if (event.keyCode === 39) {
            //plastic
            this.playerChoice = 1;
        }
    }

    addToScore() {
        if (this.playerChoice = Trash.type) {
            this.score = this.score + 1;
            logTimer();
        } else {
            //end game
        }

    }

    addPopUp() {
        let popUp = document.getElementById("pop-up");
        if (this.currentTrash.type = 1) {
            popUp.textContent = "Uh oh! This product belongs in the PLASTIC bin.";
        } else if (this.currentTrash.type = 2) {
            popUp.textContent = "Uh oh! This product belongs in the COMPOST bin.";
        } else if (this.currentTrash.type = 3) {
            popUp.textContent = "Uh oh! This product belongs in the PAPER bin.";
        }
    }

    logTimer() {
        if (this.score >= 99) {
            this.timer = 1;
        } else if (this.score % 10 == 0){
            this.timer = this.timer - 1;
        } else {
            //timer resets (this.timer = this.timer)?
        }
    }




class Player {
    constructor(_name, _highscore, _choice) {
        this.name = _name;
        this.highScore = _highscore;
        this.choice = _choice;
    }
   playerName() {
       let name =
   }
}




class Trash {
    constructor(_photo, _type) {
        this.photo = _photo;
        this.type = _type;
    }

    defineImage() {
        let object.src = this.photo;
    }
}


var waterBottle = new Trash("https://4.imimg.com/data4/EU/YB/MY-6282801/normal-plastic-bottle-500x500.jpg", 1);
var cup = new Trash("https://sc02.alicdn.com/kf/UT8D0v_XthaXXagOFbX6/Wholelsale-Disposable-PET-Plastic-Cup-with-lids.jpg", 1);
var packaging = new Trash("https://i5.walmartimages.com/asr/ad65e07f-a701-41f3-8a20-357ed5507e84_1.827c65affb84303b7d2c64a5732a4681.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", 1);
var yogurtCup = new Trash("https://oembargain.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/15s-b_1.jpg", 1);
var waterJug = new Trash("https://images-na.ssl-images-amazon.com/images/I/41geyS%2B3FwL.jpg", 1);
var juiceJug = new Trash("http://ecx.images-amazon.com/images/I/310tRm6gYsL.jpg", 1);
var container = new Trash("http://www.castawayfoodpackaging.com.au/wp-content/uploads/CA-CM650_WEB_A.png", 1);
var plasticTube = new Trash("https://cdn.shopify.com/s/files/1/2612/8356/products/plastic-tubes-for-vape-cartridges-12mm-x-85mm-packaging-container-white-4011282104402.jpg?v=1547475054", 1);

let plastic = [
    waterBottle,
    cup,
    packaging,
    yogurtCup,
    waterJug,
    juiceJug,
    container,
    plasticTube
]


var bigBox = new Trash("https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/VISSC280_shipping_carton_280_x_255_x_215mm_15_pack.jpg", 3);
var smallBox = new Trash("https://ae01.alicdn.com/kf/HTB1PtLMIpXXXXb8XpXXq6xXFXXXA/Carton-Box-Paper-Boxes-Neoprene-Swimwear-Bikini-Clothing-Packing-Boxes-Anti-Wrinkle-Hard-Brown-color.jpg_640x640.jpg", 3);
var crumpledPaper = new Trash("http://www.stickpng.com/assets/images/5c434c10e39d5d01c21da943.png", 3);
var flatPaper = new Trash("https://cdn1.bigcommerce.com/server4300/c7561/products/73/images/1735/paper_sheet__41145.1424302341.380.380.jpg?c=2", 3);
var tissue = new Trash("https://img1.exportersindia.com/product_images/bc-full/dir_5/126172/tissue-paper-1521700403-76103.jpeg", 3);
var cardboardTube = new Trash("https://housewifehowtos.com/wp-content/uploads/2012/05/toilet-paper-cardboard-tube.jpg", 3);
var envelope = new Trash("https://s3.amazonaws.com/static.lcipaper.com/img/prod/AGD7E-OUTmed.png", 3);
var card = new Trash("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/LeibnizBrief1.jpg/200px-LeibnizBrief1.jpg", 3);
var paperAirplane = new Trash("http://activehistory.ca/wp-content/uploads/2018/05/1024px-Paperairplane-1024x573.png", 3);

let paper = [
    bigBox,
    smallBox,
    crumpledPaper,
    flatPaper,
    tissue,
    cardboardTube,
    envelope,
    card,
    paperAirplane,
]


var bananaPeel = new Trash("https://www.thedailymeal.com/sites/default/files/story/2016/bananapeel.JPG", 2);
var coffeeFilter = new Trash("https://www.sciencedaily.com/images/2015/05/150513112035_1_900x600.jpg", 2);
var teaBag = new Trash("https://banner2.kisspng.com/20180301/ywe/kisspng-white-tea-tea-bag-white-bag-tea-bag-5a98d82168ad44.8435095215199662414288.jpg", 2);
var appleCore = new Trash("https://progressive.org/downloads/5300/download/rotten%20apple%20.jpg.jpe?cb=c4a7db57c9e999ed5e304327da730ae3", 2):
var avocadoRind = new Trash("https://daily.jstor.org/wp-content/uploads/2017/05/avocado_1050x700.jpg", 2);
var orangePeel = new Trash("http://assets.stickpng.com/thumbs/5a68f916988f2a795ef76ce3.png", 2);
var leaf = new Trash("https://www.ctfresh.com.sg/wp-content/uploads/2017/11/177130309.jpg", 2);
var stick = new Trash("http://www.stickpng.com/assets/images/580b585b2edbce24c47b26c7.png", 2);
var dirt = new Trash("https://static.canadiancattlemen.ca/wp-content/uploads/2015/02/153935374.jpg", 2);
var eggshells = new Trash("http://www.stickpng.com/assets/thumbs/5c570e158c21c9029a0f48c1.png", 2);

let compost = [
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

/*let startButton = getElementById("start");
console.log(startButton.id);
startButton.addEventListener("click", startGame());

function startGame() {
    console.log("in startGame");
    window.location = "https://en.wikipedia.org/wiki/Mouse";
}*/

let game = new Game();

button.addEventListener('click', game.pickRandomTrash())
