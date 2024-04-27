
let cat;

function preload(){
cat = loadImage ('image/cat.jpeg');
}



function setup (){
    createCanvas (4000,2500);
    background (0);
}

function draw (){
    let x = random(cat.width);
    let y = random(cat.height);
    let c = cat.get(int(x), int(y));
    fill (c);
    noStroke();
    rect (x,y,20,20);
}