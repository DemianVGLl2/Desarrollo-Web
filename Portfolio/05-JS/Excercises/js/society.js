var myGamePiece = new Array;
var happySrc = "./images/smiley.gif";
var sadSrc = "./images/angry.gif";
var maxDist = 5;

var myGameArea = {
    timer : 0,
    running: true,
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = screen.width;
        this.canvas.height = screen.height;
        this.context = this.canvas.getContext("2d");
        this.context.font = '12px serif';
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function flatlander(width, height, x, y, isHappy) {
    this.image = new Image();
    this.isHappy = isHappy;
    if(isHappy) {
        this.happyPoints = 1;
        this.image.src = happySrc;
    } else {
        this.happyPoints = -1;
        this.image.src = sadSrc;
    }
    this.width = width;
    this.height = height;
    this.speedX = (Math.random() * 100) % 6;
    this.speedY = (Math.random() * 100) % 6;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
            this.x, this.y,
            this.width, this.height);
        ctx.fillText(this.happyPoints, this.x, this.y+5);
    };
    this.newPos = function(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x >= canvasWidth - (this.width/2) || this.x <= 0) {
            this.speedX = -this.speedX;
        }
        if (this.y >= canvasHeight - (this.height/2) || this.y <= 0) {
            this.speedY = -this.speedY;
        }
    };
    this.moreHappy = function() {
        this.happyPoints++;
        if(this.happyPoints >= 0) {
            this.image.src = happySrc;
            this.isHappy = true;
        }
    };
    this.lessHappy = function() {
        this.happyPoints--;
        if(this.happyPoints < 0) {
            this.image.src = sadSrc;
            this.isHappy = false;
        }
    };
    this.checkSurroundings = function(other) {
        var x = Math.pow(this.x - other.x, 2);
        var y = Math.pow(this.y - other.y, 2);
        return Math.sqrt(x + y);
    };
}

function startGame() {
    var n = document.getElementById("num").value;
    var m = document.getElementById("sad").value;
    if(parseInt(m)>parseInt(n)) {
        window.alert("Can not have more sad than individuals.");
        return;
    }
    var sad = 0;
    for(i=0;i<n;i++) {
        //var rand = Math.random() * 100;
        // 30% of chance of getting an angry subject
        var nX = (Math.random() * 10000) % myGameArea.canvas.width;
        var nY = (Math.random() * 10000) % myGameArea.canvas.height;
        var gamePiece = new flatlander(30, 30, nX, nY, ++sad > m);
        myGamePiece.push(gamePiece);
    }
    myGameArea.start();
}

function updateGameArea() {
    if(myGameArea.running) {
        myGameArea.clear();
        for (i = 0; i < myGamePiece.length; i++) {
            myGamePiece[i].newPos(myGameArea.canvas.width, myGameArea.canvas.height);
            myGamePiece[i].update();
        }
        var tmpFocus, d;
        var happy = 0;
        var sad = 0;
        for (i = 0; i < myGamePiece.length; i++) {
            tmpFocus = myGamePiece[i];
            for (j = i + 1; j < myGamePiece.length; j++) {
                d = tmpFocus.checkSurroundings(myGamePiece[j]);
                if (d < maxDist) {
                    if (myGamePiece[j].isHappy) {
                        tmpFocus.moreHappy();
                    } else {
                        tmpFocus.lessHappy();
                    }
                }
            }
            if (tmpFocus.isHappy) {
                happy++;
            } else {
                sad++;
            }
        }
        myGameArea.timer++;
        document.getElementById("happyIndividuals").textContent = "Happy: " + happy;
        document.getElementById("sadIndividuals").textContent = "Sad: " + sad;
    } else return;
    if(happy === 0 || sad === 0) {
        var msg;
        myGameArea.running = false;
        if(happy == 0)
            msg = "Absolute sadness.... SAD!";
        else
            msg = "Absolute happiness reached.... Hurray!!";
        document.getElementById("timer").textContent = "Time: " + myGameArea.timer + "       " + msg;
    } else {
        document.getElementById("timer").textContent = "Time: " + myGameArea.timer;
    }
}