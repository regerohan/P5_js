let x = 10;
let y = 10;
function setup() {
    createCanvas(520, 520);
    background(255);
    
}

function draw() {
    stroke(0);
    fill(255);
    if(random(1)<0.5){
        ellipse(x, y, 20 , 20);
    }
    else{
        ellipse(x, y, 10, 10);
    }
    if(y < height){
        x = x + 0;
        y = y + 20;
    }
    else{
        x = x + 20;
        y = 10;
    }
//    print(x);
    print(y);
    
    //b = b + (0.1);
    }