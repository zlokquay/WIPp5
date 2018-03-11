let button;
let multiplier = 1.15;
let goldCounter = 300;
let goldMinerCount = 0;
let goldMinerCost = 0;
let goldDiggerCount = 0;
let goldDiggerCost = 0;

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
  text("Gold Miners: " + goldMinerCount, 400, 40);
  text("cost: " + goldMinerCost, 400, 80)
  text("Gold/Second: " + Math.round(frameRate() * goldPerSecond()) * 10 / 10, 150, 120);
  goldMinerCost = floor(20 * (Math.pow(multiplier, goldMinerCount)));
  goldDiggerCost = floor(100 * (Math.pow(multiplier, goldDiggerCount)));
  if(goldMinerCount > 0 || goldDiggerCount > 0){
    autoGenerateGold();
  }
  newUpgrades();
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

function goldDigger(){
  if(goldCounter >= goldDiggerCost){
    goldCounter = goldCounter - goldDiggerCost;
    goldDiggerCount++;
  }
}

function goldPerSecond(){
  let gps = 0;
  let goldMinerEffectiveness = 0.5;
  let goldDiggerEffectiveness = 1;
  if(goldMinerCount >= 10)
    goldMinerEffectiveness = 1;
  if(goldDiggerCount >= 10)
    goldDiggerEffectiveness = 2;

  gps = (goldMinerCount * (goldMinerEffectiveness/frameRate())) + (goldDiggerCount * (goldDiggerEffectiveness/frameRate()));

  return gps;
}

function autoGenerateGold (){
  goldCounter += goldPerSecond();
}

function newUpgrades(){
  if(goldMinerCount >= 10){
    button = createButton('Gold Digger');
    button.position(250, 120);
    button.mousePressed(goldDigger);
    text("Gold Diggers: " + goldDiggerCount, 400, 130);
    text("cost: " + goldDiggerCost, 400, 170);
  } else {

  }
}
