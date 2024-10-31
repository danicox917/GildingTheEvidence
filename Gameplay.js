let thingsList = "";
function thingsListFunc() {
  thingsList = "";
  for (var x of bagForm) {
    thingsList = thingsList.concat("<li>",x.name,"</li>");
  }
}
thingsListFunc();
let homeList = [];

let charWeight=0;
function startGame() {
  charWeight =  bagForm[0].weight+bagForm[1].weight+bagForm[2].weight;
  document.getElementById("introPortion").style.display = "none";
  document.getElementById("GameArea").style.display = "block";
  //start screen
  refresh();

  //start moving
  timeProgress();
  
  console.log(thingsList);
  refresh();
}
function refresh (){//include this somewhere else when done testing, probably startGame()?
  for (var x of bagForm) {
    y = eval(x.actions);
    y;
  }
  thingsListFunc();
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <ul>"+thingsList+"</ul>";
}

//updates time and stats and events
let seconds = 0;
let secString = "";
let progressBar = "";
let thingHappening = "<img class='cartoon' src='/images/nothing.png'></img>";
let choice1Active = "";
let choice2Active = "";
let stop = 0;
let location2 = "street";
function timeProgress(){
  secString = seconds.toString();
  progressBar="images/progBar/prog"+secString+".png";
  console.log(location2);
  if (seconds < 6 && thingHappening == "<img class='cartoon' src='/images/nothing.png'></img>"){
    console.log(progressBar);
    seconds += 1;
    document.getElementById("secs").innerHTML = "<img class='cartoon' style='max-width:100%' src='"+progressBar+"'></img>";
    document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <p>"+thingsList+"</p>";
    weightedRandom(probArray);
    document.getElementById("event").innerHTML = thingHappening;
    document.getElementById("street").style.display = "block";
    document.getElementById("shop").style.display = "none";
    consequence();
  } else if (thingHappening !== "<img class='cartoon' src='/images/nothing.png'></img>") {
    console.log("???");
    document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <p>"+thingsList+"</p>";
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").innerHTML = choice1Active;
    document.getElementById("choice2").innerHTML = choice2Active;
    stopCounter();
  } 
  else {
    document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <p>"+thingsList+"</p>";
    console.log("you done");
    document.getElementById("secs").innerHTML = "";
    document.getElementById("event").innerHTML = "";
    stopCounter();
    direction();
    }
}
//starts time counter
var location1;
var cancel;
function startCounter(loc){
  let probArray = [];
  thingHappening = "<img class='cartoon' src='/images/nothing.png'></img>";
  seconds = 0;
  loca = eval(loc);
  document.getElementById("countStarter").style.display = "none";
  document.getElementById("exit").style.display = "none";
  document.getElementById("exitText").style.display = "none";
  let location1= loca;
  cancel = setInterval(timeProgress, 1000);
  probArrayFunc(location1);
}
function stopCounter(){
  document.getElementById("recount").style.display = "none";
  clearInterval(cancel);
}
//continues after event
function contTime(){
  console.log("It's working!");

  document.getElementById("recount").style.display = "none";
  document.getElementById("outcome").style.display = "none";
  document.getElementById("choice1").style.display = "none";
  document.getElementById("choice2").style.display = "none";
  result = "";
  thingHappening = "<img class='cartoon' src='/images/nothing.png'></img>";
  choice1Active = "";
  choice2Active = "";
  document.getElementById("event").style.display = "block";
  cancel = setInterval(timeProgress, 1000);
}
//random event generator
let probArray = [];
let functionArray = [];
function probArrayFunc(location){
  for (var x in location) {
    let times = 0;
    let max = eval(location[x].probability);
    while (times < max) {
      probArray.push(location[x]);
      times += 1;
    } 
  }
}
function functionArrayFunc(action){
  functionArray = [];
  let times = 0;
  while (times < probGood) {
    functionArray.push(goodOption);
    times += 1;
    } 
  while (times < (probBad+probGood)) {
    functionArray.push(badOption);
    times += 1;
    } 
}
function weightedRandom(items){
  let index = Math.floor(Math.random() * probArray.length);
  thingHappening = items[index].desc+items[index].sprite;
  choice1Active = items[index].choice1;
  choice2Active = items[index].choice2;
  console.log(index+" index");
  console.log(thingHappening);
}
let result = "";
let rep = "";
function weightedAction(){
  console.log("weighted action");
  let index = Math.floor(Math.random() * functionArray.length);
  result = functionArray[index];
  console.log(index+" index");
  console.log(result);
  if (result == "The assailant gets ahold of your pockets and you lose some things, but you get away safely.<br><img class='cartoon'src='/images/robber.png'></img>" || result == "You bolt and the assailant manages to grab you as you leave, taking some things as you pull away.<br><img class='cartoon'src='/images/thief.png'></img>"|| result == "You drop some things and they roll away.<br><img class='cartoon'src='/images/fall.png'></img>"){
    loss();
    rep = "You lost "+change;
  } else if (result =="They aren't available for deliveries today, sorry."||result=="You return to the last shop you visited, shopkeeper isn't comfortable holding on to your things. Doesn't want to be responsible if something happens, you understand."){
    rep = "This is awkward. I guess you can't finish your shopping today. Refresh to restart the game."
  } else if (result == "They have agreed to deliver some stuff to your home. What are neighbors for? <br><img class='cartoon'src='/images/florist.png'></img>"){
    deliverStuff();
    rep = "They delivered the "+change+ " to your house.";
  } else if (result == "You leave some things at a nearby shop to lighten your load, and promise to return for them later. <br><img class='cartoon'src='/images/florist.png'></img>"){
    deliverStuff();
    rep = "You left the "+change+ " behind the counter.";
  } else if (result =="You successfully slip the pocketbook out of their pocket.<br><img class='cartoon'src='/images/rich.png'></img>"|| result =="You get some money, lucky you.<br><img class='cartoon'src='/images/rich.png'></img>"|| result =="She thanks you and gives you some money for your trouble.<br><img class='cartoon'src='/images/oldwoman.png'></img>"){
    windfall();
    rep = "You gained "+change;
  } else {
    rep = "";
  }
}
//effects of outcome
//bad thing happens and you lose money or item
var repurcussion;
let change = "";

//lose items
function loss(){
  console.log("loss");
  let coinFlip = Math.floor(Math.random()*2);
  console.log(coinFlip+" Coin Flip");
  if (coinFlip == 0){
    let index = Math.floor(Math.random()*bagForm.length);
    repurcussion = bagForm[index].name;
    console.log(index+" index");
    console.log(repurcussion);
    bagForm.splice(index,1);
    console.log(bagForm);
    change = "the "+repurcussion;
    thingsListFunc();
  } else {
    let index = Math.floor(Math.random()*(cashStart-lost));
    lost += index;
    change = "$"+index;
  }
}
//deliver stuff, gain weight
function deliverStuff(){
  console.log("deliver");
  let index = Math.floor(Math.random()*bagForm.length);
  let thing = bagForm[index].name;
  if (location1== events.store){
    let thing = shopThing;
  }
  console.log(index+" index");
  console.log(thing);
  charWeight -= bagForm[index].weight;
  change = thing;
  homeList.push(bagForm[index]);
  let carrot = JSON.stringify(homeList);
  console.log(carrot + " homeList");
  bagForm.splice(index,1);
  thingsListFunc();
}
//gain money
function windfall(){
  console.log("windfall");
  let index = Math.floor(Math.random()*10);
  console.log(index+" index");
  lost -= index;
  change = "$"+index;
}

//choices for actions
var probGood;
var probBad;
var goodOption;
var badOption;
var outcome;

function choiceOption(x){
  if (x == "BLAH"){
    console.log("THIS IS BROKEN");
  }
  else if(x == "Ask for their help"){
    probGood = 5;
    probBad = 5;
    goodOption = "They have agreed to deliver some stuff to your home. What are neighbors for? <br><img class='cartoon'src='/images/florist.png'></img>";
    badOption = "They really don't have the time today. Sorry friend, maybe next time.<br><img class='cartoon'src='/images/sadShopkeeper.png'></img>";
    if (location1 == events.street && bagForm.includes(clippings)) {
      probGood =  8;
      probBad = 2;
    } else if (location1 == events.store && bagForm.includes(memo)){
      probGood =  7;
      probBad = 3;
    } else if (location1 == events.store && bagForm.includes(callingCard)){
      probGood =  7;
      probBad = 3;
    }
    if (demo=="abb"){
      probBad+=2;
    } else if (demo=="imm"){
      probBad+=1;
    }
    finish(x);
  }
  else if (x == "Try and slip the pocket book out of their pocket"){
    probGood = 4;
    probBad = 6;
    goodOption = "You successfully slip the pocketbook out of their pocket.<br><img class='cartoon'src='/images/rich.png'></img>";
    badOption = "They catch you, and you make yourself scarce before they can call the cops.<br><img class='cartoon'src='/images/cop.png'></img>";
    if (location1 == bagForm.includes(handkerchief)) {
      probGood =  6;
      probBad = 4;
    } else if (bagForm.includes(knife)){
      probGood =  7;
      probBad = 3;
    }
    finish(x);
  }
  else if (x == "See if a shopkeeper can deliver some items home for you"){
    probGood = 5;
    probBad = 5;
    goodOption = "They have agreed to deliver some stuff to your home. What are neighbors for? <br><img class='cartoon'src='/images/florist.png'></img>";
    badOption = "They aren't available for deliveries today, sorry.<br><img class='cartoon'src='/images/sadShopkeeper.png'></img>";
    if (location1 == events.street && bagForm.includes(clippings)) {
      probGood =  8;
      probBad = 2;
    } else if (location1 == events.store && bagForm.includes(memo)){
      probGood =  7;
      probBad = 3;
    } else if (location1 == events.store && bagForm.includes(callingCard)){
      probGood =  7;
      probBad = 3;
    }
    if (demo=="abb"){
      probBad+=4;
    } else if (demo=="imm"){
      probBad+=3;
    }
    finish(x);
  }
  else if (x == "Leave some things behind to pick up another day"){
    probGood = 7;
    probBad = 3;
    goodOption = "You leave some things at a nearby shop to lighten your load, and promise to return for them later. <br><img class='cartoon'src='/images/florist.png'></img>";
    badOption = "You return to the last shop you visited, shopkeeper isn't comfortable holding on to your things. Doesn't want to be responsible if something happens, you understand.<br><img class='cartoon'src='/images/sadShopkeeper.png'></img>";
    if (demo=="abb"){
      probBad+=2;
    } else if (demo=="imm"){
      probBad+=1;
    }
    finish(x);
  }
  else if (x == "Try and pickpocket someone nearby"){
    probGood = 4;
    probBad = 6;
    goodOption = "You successfully slip the pocketbook out of their pocket.<br><img class='cartoon'src='/images/rich.png'></img>";
    badOption = "They catch you, and you make yourself scarce before they can call the cops. <br><img class='cartoon'src='/images/cop.png'></img>";
    if (location1 == bagForm.includes(handkerchief)) {
      probGood =  6;
      probBad = 4;
    } else if (bagForm.includes(knife)){
      probGood =  5;
      probBad = 3;
    }
    if (demo=="abb"){
      probBad+=2;
    } else if (demo=="imm"){
      probBad+=1;
    }
    finish(x);
  }
  else if (x == "Come back later after you've replenished your funds"){
    probGood = 0;
    probBad = 1;
    goodOption = "";
    badOption = "I guess you have to try again tomorrow. Refresh the page to start again.<br><img class='cartoon'src='/images/sadShopkeeper.png'></img>";
    if (location1 == bagForm.includes(handkerchief)) {
      probGood =  6;
      probBad = 4;
    }
    finish(x);
  }
  else if (x == "Fight them off"){
    probGood = 5;
    probBad = 5;
    goodOption = "You manage to fight them off long enough to get away, and you bolt without losing any money or items.<br><img class='cartoon'src='/images/thief.png'></img>";
    badOption = "The assailant gets ahold of your pockets and you lose some things, but you get away safely.<br><img class='cartoon'src='/images/robber.png'></img>";
    if (location1 == events.street && bagForm.includes(gun)) {
      probGood =  8;
      probBad = 2;
    } else if (bagForm.includes(knife)){
      probGood =  8;
      probBad = 2;
    }
    finish(x);
  }
  else if (x == "Run"){
    probGood = 7;
    probBad = 3;
    goodOption = "You bolt and the assailant doesn't catch you. <br><img class='cartoon'src='/images/thief.png'></img>";
    badOption = "You bolt and the assailant manages to grab you as you leave, taking some things as you pull away.<br><img class='cartoon'src='/images/thief.png'></img>";
    finish(x);
  }
  else if (x == "Pick it up"){
    probGood = 9;
    probBad = 1;
    goodOption = "You get some money, lucky you.<br><img class='cartoon'src='/images/rich.png'></img>";
    badOption = "As soon as you pick it up you can tell the paper feels odd. You look closer and see that the money is counterfeit.<br><img class='cartoon'src='/images/sadShopkeeper.png'></img>";
    finish(x);
  }
  else if (x == "Help her"){
    probGood = 3;
    probBad = 7;
    goodOption = "She thanks you and gives you some money for your trouble.<br><img class='cartoon'src='/images/oldwoman.png'></img>";
    badOption = "She thanks you and you go on your way.<br><img class='cartoon'src='/images/oldwoman.png'></img>";
    if (demo=="abb"){
      probBad+=2;
    } else if (demo=="imm"){
      probBad+=1;
    }
    finish(x);
  }
  else if (x == "Try to catch yourself"){
    probGood = 4;
    probBad = 6;
    goodOption = "You stop your fall with only your pride harmed.<br><img class='cartoon'src='/images/fall.png'></img>";
    badOption = "You drop some things and they roll away.<br><img class='cartoon'src='/images/fall.png'></img>";
    finish(x);
  }
  else if (x == "Just let yourself fall"){
    probGood = 5;
    probBad = 5;
    goodOption = "Your body breaks the fall for your things and you don't lose anything.<br><img class='cartoon'src='/images/fall.png'></img>";
    badOption = "You drop some things and they roll away.<br><img class='cartoon'src='/images/fall.png'></img>";
    finish(x);
  }
  else {
    stopCounter();
    contTime();
  }
  //continue on
}
function finish(x){
  functionArrayFunc(x);
  weightedAction();
  console.log("we working");
  document.getElementById("event").style.display = "none";
  document.getElementById("outcome").style.display = "block";
  document.getElementById("outcome").innerHTML = result + "<br>"+rep;
  document.getElementById("choice1").style.display = "none";
  document.getElementById("choice2").style.display = "none";
  if (result =="They aren't available for deliveries today, sorry."||result =="You return to the last shop you visited, shopkeeper isn't comfortable holding on to your things. Doesn't want to be responsible if something happens, you understand."||result=="I guess you have to try again tomorrow. Refresh the page to start again."){
    document.getElementById("recount").style.display = "none";
  }
  else {
    document.getElementById("recount").style.display = "block";
  }
}

//consequences
function consequence(){
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <p>"+thingsList+"</p>";
  if ((weight-charWeight)<= 0){
    blah = weightCons;
    thingHappening = blah.desc;
    choice1Active = blah.choice1;
    choice2Active = blah.choice2;
    document.getElementById("event").innerHTML = thingHappening;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").innerHTML = choice1Active;
    document.getElementById("choice2").innerHTML = choice2Active;
    stopCounter();
  }
  else if ((cashStart-lost)<=0){
    blah = cashCons;
    thingHappening = blah.desc;
    choice1Active = blah.choice1;
    choice2Active = blah.choice2;
    document.getElementById("event").innerHTML = thingHappening;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").innerHTML = choice1Active;
    document.getElementById("choice2").innerHTML = choice2Active;
    stopCounter();
  }
  else{
    return;
  }
}