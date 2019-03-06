let x = 0;
let y = 0;
function setup() {
    createCanvas(500, 500);
    background(255);
}

//function windowResized() {
//  resizeCanvas(windowWidth/2, windowHeight/2);
//}

function draw() {
    stroke(0);
    if(random(1) < 0.5){
        line(x, y, x + 20 ,y + 20);
    }
    else{
        line(x, y + 20, x + 20, y);
    }
    if(y <= height){
        x = x + 0;
        y = y + 20;
    }
    else{
        x = x + 20;
        y = 0;
    }
    }