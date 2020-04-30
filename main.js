const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");

let posY = 80;
let posX = 80;

const background = new Image();

background.src = "png/TetrisTlo.png";

function draw() {
    ctx.drawImage(background, 0, 0);
    ctx.fillStyle = "blue";
    ctx.fillRect(posX, posY, 40, 40);
    ctx.strokeStyle = "red";
    ctx.strokeRect(posX, posY, 40, 40);
    if(posY < 760){
        posY = posY + 1;
    };
    if(posX < 360){
        posX = posX + 1;
    }
    requestAnimationFrame(draw);
}

draw();