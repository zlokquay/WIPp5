let button;
let multiplier = 1.15;
let goldCounter = 0;
let goldMinerCount = 0;
let goldMinerCost = 0;

function setup() {
  createCanvas(600, 600);
  button = createButton('Generate Gold');
  button.position(20, 20);
  button.mousePressed(generateGold);

  button = createButton('Gold Miner');
  button.position(250, 20);
  button.mousePressed(goldMiner);
}

function draw() {
  background(255);
  textSize(16);
  text(floor(goldCounter), 150, 40);
  text(goldMinerCount, 400, 40);
  text(goldMinerCost, 400, 80)
  goldMinerCost = floor(20 * (Math.pow(multiplier, goldMinerCount)));
  if(goldMinerCount > 0)
    autoGenerateGold();
}

function generateGold(){
  goldCounter++;
}

function goldMiner(){
  if(goldCounter >= goldMinerCost){
    goldCounter = goldCounter - goldMinerCost;
    goldMinerCount++;
  }
}

function autoGenerateGold (){
  let effectiveness = 0.5;
  if(goldMinerCount >= 10)
    effectiveness = 1;
  goldCounter = goldCounter + (goldMinerCount * (effectiveness/frameRate()));
}
