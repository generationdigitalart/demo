var DEFAULT_SIZE = 1000;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;
const generationMetadata = {
    "name":"Aaron's Sketch",
    "description":"A simple moon taht I helped make"
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    background(255/2);
    translate(width/2, height/2);
    let r = DIM/2 - 50*M;
    ellipse(0,0,r*2);
    let a = radians(random(110,130));
    ellipse(sin(a)*r, cos(a)*r, r/4);
}
