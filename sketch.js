lavra;

function setup() {
  createCanvas(400, 400);
  
  
  let palavras=[ "Respeito","obediência","Educacão"];
  palavra=random(palavras);
  
  }

function inicializaCores() {
  background("white");
  fill("black")
  textSize(64)
  textAlign(CENTER,CENTER);
  
}


function draw() {
  inicializaCores();
  
 

  
    let maximo=width;
  let m