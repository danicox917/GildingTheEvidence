var task;
var subTasks;
var cashStart;
var weight;
var title;
var demo;
var gen;
var locphrase;
var role;
var introParagraph;
var lost;
var goal;
var places;
let currentCash = cashStart-lost;

function formHandler() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let gender = document.querySelector('input[type="radio"][name="gender"]:checked').value;
  let race = document.querySelector('input[type="radio"][name="race"]:checked').value;
  let class2 = document.querySelector('input[type="radio"][name="class2"]:checked').value;
  let locale = document.querySelector('input[type="radio"][name="locale"]:checked').value;
  let result = "Your name is "+ fname +" "+lname+". You are a " + class2 +" "+ race+" "+ gender+ " and you live in "+ locale+" place."
  document.getElementById("result").innerHTML = result;
  

  if (gender == "woman") {
    title = "Ms.";
  } else if (gender == "man"){
    title = "Mr.";
  } else {
    title = fname;
  }
  if (race == "Black") {
    demo = abb;
  } else if (race == "white"){
    demo = abw;
  } else {
    demo = imm;
  }
  if (gender == "woman") {
    gen = wom;
  } else {
    gen = notWom;
  }
  if (locale == "an urban") {
    locphrase = "";
  } else {
    locphrase = "the countryside just outside of ";
  }

  if (race == "Black" && class2 == "wealthy" && locale == "an urban") {
    role = sucbiz;
    //show certain bags
    document.getElementById("bag6").style.display = "block"; 
    document.getElementById("bag2").style.display = "block";
    document.getElementById("bag3").style.display = "block";
    } else if (race == "Black" && class2 == "wealthy" && locale == "a rural"){
    role = landowner;
    document.getElementById("bag6").style.display = "block"; 
    document.getElementById("bag2").style.display = "block";
    document.getElementById("bag3").style.display = "block";
  } else if (race == "Black" && class2 == "middle class" && locale == "an urban"){
    role = shopOwner;
    document.getElementById("bag6").style.display = "block"; 
    document.getElementById("bag2").style.display = "block";
    document.getElementById("bag3").style.display = "block";
  } else if (race == "Black" && class2 == "middle class" && locale == "a rural"){
    role = carpenter;
    document.getElementById("bag6").style.display = "block"; 
    document.getElementById("bag2").style.display = "block";
    document.getElementById("bag3").style.display = "block";
  } else if (race == "Black" && class2 == "working class" && locale == "an urban"){
    role = factory;
    document.getElementById("bag6").style.display = "block"; 
    document.getElementById("bag2").style.display = "block";
    document.getElementById("bag3").style.display = "block";
  } else if (race == "Black" && class2 == "working class" && locale == "a rural"){
    role = farmer;
    document.getElementById("bag6").style.display = "block"; 
    document.getElementById("bag2").style.display = "block";
    document.getElementById("bag3").style.display = "block";
  } else if (race == "immigrant" && class2 == "wealthy" && locale == "an urban"){
    role = sucbiz; 
    document.getElementById("bag8").style.display = "block"; 
    document.getElementById("bag4").style.display = "block";
    document.getElementById("bag3").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "immigrant" && class2 == "wealthy" && locale == "a rural"){
    role = landowner;
    document.getElementById("bag8").style.display = "block"; 
    document.getElementById("bag4").style.display = "block";
    document.getElementById("bag3").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "immigrant" && class2 == "middle class" && locale == "an urban"){
    role = shopOwner;
    document.getElementById("bag8").style.display = "block"; 
    document.getElementById("bag4").style.display = "block";
    document.getElementById("bag3").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "immigrant" && class2 == "middle class" && locale == "a rural"){
    role = carpenter;
    document.getElementById("bag8").style.display = "block"; 
    document.getElementById("bag4").style.display = "block";
    document.getElementById("bag3").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "immigrant" && class2 == "working class" && locale == "an urban"){
    role = factory;
    document.getElementById("bag8").style.display = "block"; 
    document.getElementById("bag4").style.display = "block";
    document.getElementById("bag3").style.display = "block";
  } else if (race == "immigrant" && class2 == "working class" && locale == "a rural"){
    role = railroad;
    document.getElementById("bag8").style.display = "block"; 
    document.getElementById("bag4").style.display = "block";
    document.getElementById("bag3").style.display = "block";
  } else if (race == "white" && class2 == "wealthy" && locale == "an urban"){
    role = sucbiz;
    document.getElementById("bag1").style.display = "block"; 
    document.getElementById("bag5").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "white" && class2 == "wealthy" && locale == "a rural"){
    role = landowner;
    document.getElementById("bag1").style.display = "block"; 
    document.getElementById("bag5").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  }else if (race == "white" && class2 == "middle class" && locale == "an urban"){
    role = shopOwner;
    document.getElementById("bag1").style.display = "block"; 
    document.getElementById("bag5").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "white" && class2 == "middle class" && locale == "a rural"){
    role = carpenter;
    document.getElementById("bag1").style.display = "block"; 
    document.getElementById("bag5").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "white" && class2 == "working class" && locale == "an urban"){
    role = factory;
    document.getElementById("bag1").style.display = "block"; 
    document.getElementById("bag5").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else if (race == "white" && class2 == "working class" && locale == "a rural"){
    role = farmer;
    document.getElementById("bag1").style.display = "block"; 
    document.getElementById("bag5").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  } else {
    role = carpenter;
    document.getElementById("bag1").style.display = "block"; 
    document.getElementById("bag5").style.display = "block";
    document.getElementById("bag7").style.display = "block";
  }
  goal = eval(role.goal);
  places = eval(goal.locations);
  stuff1 = eval(places[0].thing);
  stuff2 = eval(places[1].thing);
  stuff3 = eval(places[2].thing);
  shoppingList= [stuff1.name, stuff2.name, stuff3.name];
  task = goal.name;
  subTasks = goal.tasks[0]+", "+goal.tasks[1]+", and "+goal.tasks[2]+".";

  console.log(shoppingList);

  cashStart = (defaultSet.money*role.money*gen.money).toFixed(2);
  lost = 0;
  weight = (defaultSet.weight*gen.weight*role.weight);
  motif="<img src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/Motif2.png' class='motif'></img>"

  introParagraph = motif+ "Good afternoon " +
  title +" "+lname+ "! Today is April 5, 1885, a lovely Sunday in "+ locphrase +" New York City. <br> It's going to be a big day so you better get started. <br> You're "+ gen.preface + " a " + role.name + " and today you have to "+task+". There's three things you need to do: " +subTasks+" You have $" + cashStart+" to get everything on your list. <br> It's a crazy world out there and anything could happen, so you want to be sure you have <a href='#perspos'>everything you need</a> before you go. But you can only carry about " + weight + " pounds, including the things you need to pick up while you're out.<br> Grab your bag before you go: <br>"
  document.getElementById("introParagraph").innerHTML = introParagraph;
    //document.getElementById("sprite2").innerHTML = "<img style='width:100px' src='"+role.sprite+"'</img>";

  document.getElementById("obj1").innerHTML = obj1;
  document.getElementById("obj2").innerHTML = obj2;
  document.getElementById("obj3").innerHTML = obj3;
  document.getElementById("obj4").innerHTML = obj4;
  document.getElementById("obj5").innerHTML = obj5;
  document.getElementById("obj6").innerHTML = obj6;
  document.getElementById("obj7").innerHTML = obj7;
  document.getElementById("obj8").innerHTML = obj8;
}
function startPlay(){
  document.getElementById("charButton").style.display = "none";
  document.getElementById("characterButton").style.display = "none";
  document.getElementById("introPortion").style.display = "block";
}
