const defaultSet = {
  money: 10,
  weight: 50
}
//career options
const sucbiz = {
  name: "successful business owner",
  money: 1,
  weight: 1,
  goal: "party",
  sprite: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e177ab8d0211378.png",
}
const landowner = {
  name: "landowner",
  money: .9,
  weight: .8,
  goal: "party",
  sprite: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e177ab8d0211378.png"
}
const shopOwner = {
  name: "shop owner",
  money: .7,
  weight: .7,
  goal:"dinner",
  sprite: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e177ab8d0211378.png"
}
const carpenter = {
  name:"carpenter" ,
  money: .7,
  weight: .5,
  goal:"dinner",
  sprite: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e177ab8d0211378.png"
}
const factory = {
  name: "factory worker",
  money: .6,
  weight: .5,
  goal:"workSupplies",
  sprite: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e177ab8d0211378.png"
}
const farmer = {
  name: "farmer",
  money: .5,
  weight: .4,
  goal:"workSupplies",
  sprite: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e177ab8d0211378.png"
}
const railroad = {
  name: "railroad worker",
  money: .5,
  weight: .4,
  goal: "workSupplies",
  sprite: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e177ab8d0211378.png"
}

//actions 
const deliverGoods = {
  desc:"You wonder if the shopkeeper would be willing to deliver your purchase to your home, so that you won't have to carry it around yourself.",
  location: ["store"],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/florist.png'></img>",
  probability: 30,
  choice1: "Ask for their help",
  choice2: "Pass"
}
const pickpocket = {
  desc:"You notice a person nearby has a pocketbook about to tip out of their pocket. They're dressed nicely, and it's likely there's some money in it.",
  location: ["store","street"],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/rich.png'></img>",
  probability: 20,
  choice1: "Try and slip the pocket book out of their pocket",
  choice2: "Pass"
}
const getRobbed = {
  desc:"A fiend approaches you and threatens you bodily harm if you don't hand over your valuables.",
  location: ["street"],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/robber.png'></img>",
  probability: 15,
  choice1: "Fight them off",
  choice2: "Run"
}
const enterHouse = {
  desc:"Your door is locked.",
  location: ["home"],
  sprite:"<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/door.png'></img>",
  probability: 60,
  choice1: "Knock to see if anyone is home",
  choice2: ""
}
const friendDeliver = {
  desc:"You run into a friend on the street. They're going to be passing your house, and you wonder if they wouldn't mind bringing home some of your purchases for you.",
  location: ["street"],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/florist.png'></img>",
  probability: 10,
  choice1: "Ask for their help",
  choice2: "Pass"
}
const findMoney = {
  desc:"As you're walking down the street you look down and see some money on the street.",
  location: ["street"],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/boss.png'></img>",
  probability: 5,
  choice1: "Pick it up",
  choice2: "Pass"
}
const helpMoney = {
  desc:"You see a little old woman struggling to carry some items.",
  location: ["street"],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/oldwoman.png'></img>",
  probability: 10,
  choice1: "Help her",
  choice2: "Pass"
}
const slipDrop = {
  desc:"You trip on the street",
  location: ["street"],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/fall.png'></img>",
  probability: 8,
  choice1: "Try to catch yourself",
  choice2: "Just let yourself fall"
}
const nothing = {
  desc: "<img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/nothing.png'></img>",
  location:["store","street"],
  sprite: "",
  probability: 100,
  choice1: "",
  choice2: ""
}
const weightCons = {
  desc: "Oh dear, it doesn't look like you're able to carry anything else. What do you want to do?",
  location:[],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/weights.png'></img>",
  probability: 0,
  choice1: "See if a shopkeeper can deliver some items home for you",
  choice2: "Leave some things behind to pick up another day"
}
const cashCons = {
  desc: "Oh dear, it looks like you're out of cash. What do you want to do?",
  location:[],
  sprite: "<br><img class='cartoon' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/boss.png'></img>",
  probability: 0,
  choice1: "Try and pickpocket someone nearby",
  choice2: "Come back later after you've replenished your funds"
}
const events = {
  street: [pickpocket, getRobbed, friendDeliver, findMoney, helpMoney, slipDrop, nothing],
  store:[deliverGoods, pickpocket, nothing],
}

//locations
const mercantile = {
  name:"the Mercantile Shop",
  desc:"Things for All Occassions",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/manMerchant.png",
  question:"What did you need? A punch bowl? Sounds like you're in for a fun evening.",
  cost:3,
  weight: 6,
  thing: "punchbowl"
}
const printer = {
  name:"the Printer's Shop",
  desc:"Fine Paper Stocks and Inks",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/man.png",
  question:"Need something printed? Well you're in the right place. Oh you just need to pick up an order. Well I have your invitations right here.",
  cost:1.50,
  weight: 5,
  thing: "invitations"
}
const florist = {
  name:"the Florist",
  desc:"Finest Florals and Botanicals",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/florist.png",
  question:"Welcome to the finest smelling shop in town. Picking up an arrangement?",
  cost:3,
  weight: 6,
  thing: "flowers"
}
const butcher = {
  name:"the Butcher",
  desc:"Fresh Meats and Delectables",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/man.png",
  question:"I just finished cutting this roast up, so I can guarantee its freshness.",
  cost:3.20,
  weight: 20,
  thing: "roast"
}
const market = {
  name:"the Market",
  desc:"Fresh Fruits and Vegetables",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/florist.png",
  question:"I just got in a fresh shipment, how can I help you? Assorted vegetables? Good for you, don't touch the stuff myself.",
  cost:.4,
  weight: 10,
  thing: "veggies"
}
const coalMonger = {
  name:"the Coal Monger",
  desc:"We Sell Coal Here",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/manMerchant.png",
  question:"There's still a bit of a chill in the air, people want to keep their house warm.",
  cost:.1,
  weight:15,
  thing: "coal"
}
const cobbler = {
  name:"the Cobbler",
  desc:"Handcrafted Shoes",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/man.png",
  question:"My apprentice Johnny worked on these boots. Don't tell him I said so, but he did good work on them.",
  cost:4.25,
  weight: 10,
  thing: "shoes"
}
const haberdasher = {
  name:"the Haberdasher",
  desc:"Fine Men's Apparel",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/florist.png",
  question:"You wanted some gloves? It's your lucky day, I happen to sell gloves.",
  cost:.75,
  weight: 3,
  thing: "gloves"
}
const tobacconist = {
  name:"Tobacco Galore",
  desc:"Loose Tobacco and Rolled Cigars",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/manMerchant.png",
  question:"*Cough Cough* Have you heard people saying that this stuff is bad for you? I've been smoking a pipe for years and I've always had perfect health.",
  cost:1,
  weight: 10,
  thing: "tobacco"
}
const home = {
  name:"Home",
  desc:"It's where you live",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/door.png",
  question:"Let's see how you did with your errands.",
  cost:20,
  weight: 10,
  thing: "dfljasdf"
  
}
//tasks
const party = {
  name: "get ready for a dinner soiree for your dear friends and business acquaintences",
  tasks:["buy a new punch bowl", "pick up invitations", "buy flowers"],
  locations:[mercantile, printer, florist],
  sprite:"https://www.gutenberg.org/files/23290/23290-hhttps://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/004.jpg"
}
const dinner = {
  name: "get everything you need for a wonderful Sunday dinner for your family",
  tasks:["pick up the roast", "go to the market for vegetables", "get coal for the stove"],
  locations:[butcher, market, coalMonger],
  sprite:"https://bpldcassets.blob.core.windows.net/derivativeshttps://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/commonwealth:3f462k49j/image_access_800.jpg"
}
const workSupplies = {
  name: "get new work supplies",
  tasks:["buy a sturdy new pair of work boots", "get some new gloves", "pick up some tobacco, as a treat"],
  locations:[cobbler, haberdasher, tobacconist],
  sprite:"https://bpldcassets.blob.core.windows.net/derivativeshttps://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/commonwealth:pz50hc92q/image_access_800.jpg"
}

//objects
const callingCard = {
  name:"<a href='#pp1'>calling card</a>",
  desc:"It's a card with your name on it.",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/Calling%20Card%20Case.png' alt='a tortiseshell calling card case'>",
  weight: .2,
  actions: "deliverGoods.probability= 65"
}
const memo = {
  name:"<a href='#pp2'>memorandum book and a pencil</a>",
  desc:"Just a little notebook and pencil, you can write just about anything in it.",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/MemoBook.png' alt='a small notebook with an ivory pencil'>",
  weight: .25,
  actions: "deliverGoods.probability= 60"
}
const handkerchief = {
  name:"<a href='#pp3'>handkerchief</a>",
  desc:"Wipe your nose or whatever.",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/handkerchief.png' alt='a white lacy handkerchief'>",
  weight: .1,
  actions:"pickpocket.probability=40"
}
const gun = {
  name:"<a href='#pp4'>pistol</a>",
  desc:"Put 'em up cowboy.",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/pistol.png' alt='a silver plated art nouveau pistol'>",
  weight: 1.3,
  actions: "getRobbed.probability=40"
}
const knife = {
  name:"<a href='#pp5'>knife</a>",
  desc:"Stabby stabby.",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/knife.png' alt='a folding pocket knife'>",
  weight: .2,
  actions: "getRobbed.probability=40"
}
const keys = {
  name:"<a href='#pp6'>set of your house keys</a>",
  desc:"Use it to get into your house, or keep other people out of your house.",
  sprite:"<img style='width:100px'src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/keys.png' alt='iron key on a chain'>",
  weight: .5,
  actions: "enterHouse.probability=100"
}
const clippings = {
  name:"<a href='#pp7'>few newspaper clippings</a>",
  desc:"Includes the news of the day.",
  sprite:"<img style='width:100px'src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/clipping.png' alt='a newspaper clipping describing the presidential campaign of Grover Cleveland'>",
  weight: .1,
  actions:"friendDeliver.probability= 60"
}
const ring = {
  name:"<a href='#pp8'>diamond ring</a>",
  desc:"Why wear it when you could just carry it around with you.",
  sprite:"<img style='width:100px'src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/ring.png' alt='a diamond wedding ring'>",
  weight: .25,
  actions: "getRobbed.probability = 40"
}
const watch = {
  name:"<a href='#pp9'>pocket watch</a>",
  desc:"What time is it? The time of our lives.",
  sprite:"<img style='width:100px'src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/watch.png' alt='a gold and white pocket watch'>",
  weight: .2,
  actions: "getRobbed.probability = 40"
}
//shop items
const punchbowl = {
  name:"punch bowl",
  desc:"Holds punch",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/punchbowl.png' alt='an orange glass punch bowl'>",
  weight: 20
}
const invitations = {
  name:"invitations",
  desc:"invites your best friends",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/invite.png' alt='an ornate gold embossed invitation'>",
  weight: .2
}
const flowers = {
  name:"flowers",
  desc:"Smells nice",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bouquet.png' alt='a basket of white flowers'>",
  weight: 2.2
}
const roast = {
  name:"roast",
  desc:"Smells nice",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/beef.png' alt='illustration of a cut of beef'>",
  weight: 8
}
const veggies = {
  name:"vegetables",
  desc:"Fresh and healthy",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/eggplant.png' alt='illustration of an eggplant'>",
  weight: 5
}
const coal = {
  name:"coal",
  desc:"Keeps you warm",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/coal.png' alt='black and white photo of a lump of coal'>",
  weight: 10
}
const shoes = {
  name:"shoes",
  desc:"Good for work",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/boots.png' alt='brown leather boots'>",
  weight: 3
}
const gloves = {
  name:"gloves",
  desc:"Keep your hands warm and clean",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/glove.png' alt='white leather glove'>",
  weight: .6
}
const tobacco = {
  name:"tobacco",
  desc:"I've heard rumors this stuff isn't good for you",
  sprite:"<img style='width:100px' src='https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/tobacco.png' alt='loose dried tobacco'>",
  weight: .5
}
//bag options
const bag1 = {
  name:"white woman most common",
  desc:"There's a <a href='#pp3'>handkerchief</a>, a <a href='#pp8'>diamond ring</a>, and some of your <a href='#pp1'>calling cards</a> in this bag. People might see you as beautiful, refined, and social, and think that you're ready to be a person about town.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag1.png",
  contents: [ring, callingCard, handkerchief]
}
const bag2 = {
  name:"black woman most common",
  desc:"This bag contains a <a href='#pp6'>set of your house keys</a>, some <a href='#pp7'>assorted newspaper clippings</a>, and a <a href='#pp5'>small knife</a>. You're just running errands, but if trouble finds you people might think that you're not afraid to get into it.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag2.png",
  contents: [knife, keys, clippings]
}
const bag3 = {
  name:"italians most common",
  desc:"There's a <a href='#pp3'>handkerchief</a>, a <a href='#pp4'>pistol</a>, and a <a href='#pp5'>small knife</a> in this bag. You might seem resourceful to others, and ready for virtually any issue that comes your way.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag3.png",
  contents: [knife, gun, handkerchief]
}
const bag4 = {
  name:"german most common",
  desc:"You have a <a href='#pp2'>little notebook with a pencil</a>, a <a href='#pp9'>pocket watch</a>, and a <a href='#pp4'>gun</a>. You seem like a genteel person, but not totally naive to the problems in the world.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag4.png",
  contents: [memo, watch, gun]
}
const bag5 = {
  name:"white american most common",
  desc:"This bag has a <a href='#pp9'>watch</a>, a <a href='#pp4'>pistol</a>, and <a href='#pp6'>keys to your home</a>. You want people to know that you have places to be and will not abide nonsense.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag5.png",
  contents: [gun, watch, keys]
}
const bag6 = {
  name:"african american most common",
  desc:"There is a <a href='#pp4'>pistol</a>, a <a href='#pp5'>small knife</a>, and <a href='#pp6'>keys to your house</a> in this bag. People might think that you anticipate trouble and you're ready to grapple with it if necessary.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag6.png",
  contents: [gun, knife, keys]
}
const bag7 = {
  name:"white alt",
  desc:"There are <a href='#pp1'>calling cards</a>, a <a href='#pp2'>memorandum book with a pencil</a>, and a <a href='#pp3'>handkerchief</a> in this bag. You seem to others like a gentle soul with a lot of friendship and comfort in your life.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag7.png",
  contents: [callingCard, memo, handkerchief]
}
const bag8 = {
  name:"imm alt",
  desc:"There's <a href='#pp7'>some newspaper clippings</a>, a <a href='#pp2'>little notebook with a pencil</a>, and a <a href='#pp8'>diamond ring</a> in this bag. Just some assorted odds and ends that you might find on a person with no particular destination in mind.",
  sprite:"https://raw.githubusercontent.com/danicox917/GildingTheEvidence/refs/heads/main/images/bag8.png",
  contents: [clippings, memo, ring]
}
function dispObj(obj) {
  return "<img style='width:100%;' src='"+obj.sprite+"'</img><br>"+obj.desc+"<br>Weight: "+(obj.contents[0].weight+obj.contents[1].weight+obj.contents[2].weight).toFixed(2)+" lbs"
}
//change these to new bag formats
let obj1 = dispObj(bag1);
let obj2 = dispObj(bag2);
let obj3 = dispObj(bag3);
let obj4 = dispObj(bag4);
let obj5 = dispObj(bag5);
let obj6 = dispObj(bag6);
let obj7 = dispObj(bag7);
let obj8 = dispObj(bag8);

var bag;
let bagForm = [];
let bagSprite="";

function bagFunction(x){
  location.href = "#bagContents";
  charWeight=0;
  purse = eval(x);
  let bagSprite=purse.sprite;
  document.getElementById("charSprite").innerHTML = "<img style='width:100%;' src='"+bagSprite+"'</img>";
  a = purse.contents[0];
  b = purse.contents[1];
  c = purse.contents[2];
  bagForm=[a,b,c];
  cont1=a.name;
  cont2=b.name;
  cont3=c.name;

  charWeight += a.weight;
  charWeight += b.weight;
  charWeight += c.weight;
  
  document.getElementById("bagSubmit").style.display = "block";
  document.getElementById("bagContents").style.display = "block";
  document.getElementById("bagContents").innerHTML = "You decided to bring a "+cont1+", a "+ cont2+", and a "+cont3+" on your errand today. They weigh "+ charWeight.toFixed(2)+" pounds altogether. That leaves "+(weight-charWeight).toFixed(2)+" pounds of space left for the things you need to pick up. <br> If this sounds right continue on, otherwise scroll up and change your selection.";
}

function objSelector() {
  bag=[];
  charWeight = 0;
  bagForm=[];
  var checkboxes = document.querySelectorAll('input[type="checkbox"][name="bag"]:checked');
  for (var checkbox of checkboxes)
  {if (checkbox.checked) {
    bag.push(checkbox.value);
  }
  }
  if (bag.length === 3) {
    for (var x of bag) {
      y = eval(x);
      bagForm.push(y);
      charWeight = charWeight+y.weight;
    }
    let cont1= bagForm[0].name;
    let cont2= bagForm[1].name;
    let cont3= bagForm[2].name;
    document.getElementById("bagSubmit").style.display = "none";
    document.getElementById("reset").style.display = "block";
    document.getElementById("continue").style.display = "block";
    document.getElementById("bagContents").innerHTML = "You decided to bring a "+cont1+", a "+ cont2+", and a "+cont3+" on your errand today. They weigh "+ charWeight.toFixed(2)+" pounds altogether. That leaves "+(weight-charWeight).toFixed(2)+" pounds of space left for the things you need to pick up. <br> If this sounds right continue on, otherwise change your selection and submit again.";
  }
  else {
    document.getElementById("bagContents").innerHTML = "You have to pick exactly three things, sorry :/";
  }
}

  document.getElementById("obj1").innerHTML = obj1;
  document.getElementById("obj2").innerHTML = obj2;
  document.getElementById("obj3").innerHTML = obj3;
  document.getElementById("obj4").innerHTML = obj4;
  document.getElementById("obj5").innerHTML = obj5;
  document.getElementById("obj6").innerHTML = obj6;
  document.getElementById("obj7").innerHTML = obj7;
  document.getElementById("obj8").innerHTML = obj8;

function selected(x){
  var sel = document.getElementById(x);
  {if (sel.style.backgroundColor=="rgb(242, 220, 155)") {
    sel.style.backgroundColor="#F2EDD5d9";
    return;
  }
  else{
    sel.style.backgroundColor="rgb(242, 220, 155)";
  }
}
return
}
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 3) {
        $(this).prop('checked', false);
        document.getElementById("alert").innerHTML = "You can only pick 3!";
    }
});

//race/gender options
const abw = {
  money: 1,
  randomEvents:""
}
const abb = {
  money: .6,
  randomEvents:""
}
const imm = {
  money: .8,
  randomEvents:""
}
const wom = {
  money: .75,
  weight: 1.2,
  randomEvents: "",
  preface: "the wife of"
}
const notWom = {
  money: 1,
  weight: 1,
  randomEvents:"",
  preface: ""
}
