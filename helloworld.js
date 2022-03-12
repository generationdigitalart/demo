function setup() {
    createCanvas(400, 400);
    background(255/2);
    translate(width/2, height/2);
    let r = 150;
    ellipse(0,0,r*2);
    let a = radians(115);
    ellipse(sin(a)*r, cos(a)*r, r/4);
}
