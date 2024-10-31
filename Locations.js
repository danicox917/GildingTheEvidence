var shopName;
var shopDesc;
var shopSprite;
var shopQuest;
var shopCost;
var shopWeight;
var shopThing;

function shop(x) {
  document.getElementById("enter").style.display = "none";
  document.getElementById("enterText").style.display = "none";
  location2 = "store";
  console.log(stop);
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <p>"+thingsList+"</p>";
  document.getElementById("street").style.display = "none";
  document.getElementById("shop").style.display = "block";
  y = eval(x);
  shopName = y.name;
  shopDesc = y.desc;
  shopSprite = "<img class='cartoon' src='"+y.sprite+"'</img>";
  shopQuest = y.question;
  shopCost = y.cost;
  shopWeight = y.weight;
  shopThing = eval(y.thing);
  console.log(shopThing);
  document.getElementById("welcome").innerHTML = "Welcome to "+shopName+ ".";
  document.getElementById("shopDesc").innerHTML = shopDesc;
  document.getElementById("shopkeeper").innerHTML = shopSprite;
  document.getElementById("shopQuest").innerHTML = shopQuest + "<br>"+ "That's gonna be "+"$"+shopCost.toFixed(2);
}
function storeWander(){
  document.getElementById("exit").style.display = "none";
  document.getElementById("exitText").style.display = "none";
  lost += shopCost;
  charWeight += shopWeight;
  thingHappening = 0;
  seconds = 0;
  bagForm.push(shopThing);
  console.log(bagForm);
  thingsListFunc();
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <p>"+thingsList+"</p>";
  consequence();
  document.getElementById("secs").innerHTML = "";
  document.getElementById("event").innerHTML = "";
  document.getElementById("street").style.display = "block";
  document.getElementById("shop").style.display = "none";
  location2 = "store";
  startCounter(events.store);
  stop += 1;
}

function backToStreet(){
  document.getElementById("enter").style.display = "none";
  document.getElementById("enterText").style.display = "none";
  lost += shopCost;
  charWeight += shopWeight;
  thingHappening = 0;
  seconds = 0;
  bagForm.push(shopThing);
  console.log(bagForm);
  thingsListFunc();
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight).toFixed(2)+" lbs<br></p>Money Available: <p>$"+(cashStart-lost).toFixed(2)+"</p>Your Things: <p>"+thingsList+"</p>";
  document.getElementById("secs").innerHTML = "";
  document.getElementById("event").innerHTML = "";
  location2 = "street";
  document.getElementById("street").style.display = "block";
  document.getElementById("shop").style.display = "none";
  location2 = "street";
  startCounter(events.street);
  stop += 1;
}
function direction(){
  if (location2 == "store"){
    console.log("you in da store");
    document.getElementById("exit").style.display = "block";
    document.getElementById("exitText").style.display = "block";
    location2 = "street";
  } else if (location2 == "street"){
    console.log("you in da street");
    if (stop == 3){
      document.getElementById("homeText").style.display = "block";
      location2 = "home";
      if (bagForm.includes(keys)==true || homeList.includes(keys)){
        document.getElementById("yesKeys").style.display = "block";
      }
      else{
        document.getElementById("noKeys").style.display = "block";
      }
    }
    else{
    document.getElementById("enter").style.display = "block";
    document.getElementById("enterText").style.display = "block";
    location2 = "store";
    }
  }
  else {
    console.log("This broke");
  }
}
let someoneHome = "";
function keysYesNo(){
  let coinFlip = Math.floor(Math.random()*2);
  console.log(coinFlip+" Coin Flip");
  document.getElementById("noKeys").style.display = "none";
  document.getElementById("homeText").style.display = "none";
  if (coinFlip == 0){
    someoneHome = "Luckily someone is home and let's you in.";
    document.getElementById("enterHome").style.display = "block";
  } else {
    someoneHome = "It doesn't sound like anyone is coming. That's embarassing. Refresh the page to start again."
  }
  document.getElementById("doorAnswer").style.display = "block";
  document.getElementById("doorAnswer").innerHTML = someoneHome;
}

let tally = 0;

function atHome(){
  console.log("triggered");
 document.getElementById("yesKeys").style.display = "none";
  document.getElementById("homeText").style.display = "none";
  document.getElementById("noKeys").style.display = "none";
  document.getElementById("statsBox").style.display = "none";
  document.getElementById("doorAnswer").style.display = "none";
  console.log(homeList);
  let finalBag = "";
  let finalBagList=[];
  let allStuffa = [];
  let homeLista = JSON.stringify(homeList);
  let homeListb = eval(homeLista);
  
  allStuffa= allStuffa.concat(bagForm);
  allStuffa= allStuffa.concat(homeListb);

  function findPound(x){
    return x != undefined;
  }

  let allStuffb = [...new Set(allStuffa)];
  let allStuffc = allStuffb.filter(findPound);
  
  let allStuff = eval(allStuffc);

  tally = allStuff.length;
  
  for (obj of allStuff) {
    finalBag = finalBag.concat("<div class='col-lg-4 col-md-4 col-sm-6'>"+obj.sprite+"<br>"+obj.name+"</div>");
    finalBagList = finalBagList.concat(obj.name);
  };

  
  stuffRoundup = "Here is all of your stuff, including things that were delivered home for you: "+finalBag;
  location2 = "store";
  //check bag contents
  let finalScore = "This shit broken babyyy";
  let reflection = "Think about how the person you played as and the things you brought with you helped or hindered your ability to complete your errands. Did you come across theives more because you carried a weapon with you? Did you have more money at your disposal because of your race or gender? <br><br> If you haven't already, play again or a few more times and compare your results. If you browse the information below, it will provide you with historical context and hints that could help you.";

  let strng = finalBagList.toString();
  console.log(strng);
  let count = (strng.match(/href/g) || []).length;;
  console.log(count + " count");
  tally -= count;
  
  console.log(tally);
  if (tally == 3){
    finalScore = "You got all of your things! Well done!<img class='cartoon'src='"+goal.sprite+"'></img>";
  }
  else if (tally > 0){
    finalScore = "You very nearly got everything, so close.<img class='cartoon'src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/fall.png'></img>";
  }
  else {
    finalScore = "You didn't manage to get one single thing on your list. Bad luck.<img class='cartoon'src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/sadShopkeeper.png'></img>"
  }

let bonus = "";
  if (charWeight == 0) {
    bonus=bonus.concat("<br>You also somehow got all of your things home without carrying any of it yourself. You must be very friendly.");
  }
  if (lost<0){
    bonus=bonus.concat("<br>You also managed to come home with more money than you started with. Hopefully nobody asks any questions about that one.")
  }
  if (lost==0){
    bonus=bonus.concat("<br>You also managed to come home with the exact same amount of money that you started with. Hopefully nobody asks any questions about that one.")
  }
  
  rundown = "<div class='row'>"+stuffRoundup + "</div>"+finalScore+"<br>You have $"+(cashStart-lost).toFixed(2)+" left and the space for "+(weight-charWeight).toFixed(2)+" more pounds of stuff.<br>"+bonus+"<br><br>"+reflection;
  document.getElementById("shopkeeper").style.display = "none";
  document.getElementById("street").style.display = "none";
  document.getElementById("shop").style.display = "block";
  document.getElementById("store1").style.display = "none";
  document.getElementById("store2").style.display = "none";
  document.getElementById("welcome").innerHTML = "Welcome home!";
  document.getElementById("shopDesc").innerHTML = "Let's see how you did on your errands today.";
  document.getElementById("shopQuest").innerHTML = rundown; //document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight)+"<br></p>Money Available: <p>$"+(cashStart-lost)+"</p>Your Things: <p>"+thingsList+"</p>";
}
