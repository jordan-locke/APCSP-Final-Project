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







class Player {
    constructor(_name, _highscore) {
        this.name = _name;
        this.highScore = _highscore;
    }
}

var Player1 = new Player(name, 0)





class Trash {
    constructor(_photo) {
        this.photo = _photo;
    }
}

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

var waterBottle = new Trash("https://4.imimg.com/data4/EU/YB/MY-6282801/normal-plastic-bottle-500x500.jpg");
var cup = new Trash("https://sc02.alicdn.com/kf/UT8D0v_XthaXXagOFbX6/Wholelsale-Disposable-PET-Plastic-Cup-with-lids.jpg");
var packaging = new Trash("https://i5.walmartimages.com/asr/ad65e07f-a701-41f3-8a20-357ed5507e84_1.827c65affb84303b7d2c64a5732a4681.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF");
var yogurtCup = new Trash("https://oembargain.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/15s-b_1.jpg");
var waterJug = new Trash("https://images-na.ssl-images-amazon.com/images/I/41geyS%2B3FwL.jpg");
var juiceJug = new Trash("http://ecx.images-amazon.com/images/I/310tRm6gYsL.jpg");
var container = new Trash("http://www.castawayfoodpackaging.com.au/wp-content/uploads/CA-CM650_WEB_A.png");
var plasticTube = new Trash("https://cdn.shopify.com/s/files/1/2612/8356/products/plastic-tubes-for-vape-cartridges-12mm-x-85mm-packaging-container-white-4011282104402.jpg?v=1547475054");

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

var bigBox = new Trash("https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/VISSC280_shipping_carton_280_x_255_x_215mm_15_pack.jpg");
var smallBox = new Trash("https://ae01.alicdn.com/kf/HTB1PtLMIpXXXXb8XpXXq6xXFXXXA/Carton-Box-Paper-Boxes-Neoprene-Swimwear-Bikini-Clothing-Packing-Boxes-Anti-Wrinkle-Hard-Brown-color.jpg_640x640.jpg");
var crumpledPaper = new Trash("http://www.stickpng.com/assets/images/5c434c10e39d5d01c21da943.png");
var flatPaper = new Trash("https://cdn1.bigcommerce.com/server4300/c7561/products/73/images/1735/paper_sheet__41145.1424302341.380.380.jpg?c=2");
var tissue = new Trash("https://img1.exportersindia.com/product_images/bc-full/dir_5/126172/tissue-paper-1521700403-76103.jpeg");
var cardboardTube = new Trash("https://housewifehowtos.com/wp-content/uploads/2012/05/toilet-paper-cardboard-tube.jpg");
var envelope = new Trash("https://s3.amazonaws.com/static.lcipaper.com/img/prod/AGD7E-OUTmed.png");
var card = new Trash("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/LeibnizBrief1.jpg/200px-LeibnizBrief1.jpg");
var paperAirplane = new Trash("http://activehistory.ca/wp-content/uploads/2018/05/1024px-Paperairplane-1024x573.png");

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

var bananaPeel = new Trash("https://www.thedailymeal.com/sites/default/files/story/2016/bananapeel.JPG");
var coffeeFilter = new Trash("https://www.sciencedaily.com/images/2015/05/150513112035_1_900x600.jpg");
var teaBag = new Trash("https://banner2.kisspng.com/20180301/ywe/kisspng-white-tea-tea-bag-white-bag-tea-bag-5a98d82168ad44.8435095215199662414288.jpg");
var appleCore = new Trash("https://progressive.org/downloads/5300/download/rotten%20apple%20.jpg.jpe?cb=c4a7db57c9e999ed5e304327da730ae3"):
var avocadoRind = new Trash("https://daily.jstor.org/wp-content/uploads/2017/05/avocado_1050x700.jpg");
var orangePeel = new Trash("http://assets.stickpng.com/thumbs/5a68f916988f2a795ef76ce3.png");
var leaf = new Trash("https://www.ctfresh.com.sg/wp-content/uploads/2017/11/177130309.jpg");
var stick = new Trash("http://www.stickpng.com/assets/images/580b585b2edbce24c47b26c7.png");
var dirt = new Trash("https://static.canadiancattlemen.ca/wp-content/uploads/2015/02/153935374.jpg");
var eggshells = new Trash("http://www.stickpng.com/assets/thumbs/5c570e158c21c9029a0f48c1.png");



let startButton = getElementById("start");
startButton.addEventListener("click", startGame());

function startGame() {
    window.location = "gamepg.html";
}
