// Exercise3 - Exercise 3 - Tell me a Joke

// L-40  Exercise 3 - Tell me a Joke

// <body>
//   <div>
//     <h1>The joke is:</h1>
//     <p id = "joke" class="joke" name ="joke">
//   <button onclick="randomJokes()" type="button" class="btn btn-outline-dark my-3">New Joke!</button>
//   </div>
// </body>

//js
let jokes = ["Knock knock. Who's there? Interrupting sloth. Interrupting sloth who? [20 seconds of silence] Sloooooooooooooth."
, "Knock knock. Who's there? Figs. Figs who? Figs the doorbell. I've been knocking forever!"
, "Knock knock. Who's there? To. To who? No, it's to whom!"
, "Knock knock. Who's there? Spell. Spell who? W.H.O."
, "Knock knock. Who's there? Cow says. Cow says who? No, a cow says moo."
, "Knock knock. Who's there? Etch. Etch who? Bless you!"
, "Knock knock. Who's there? Tank. Tank Who? You're welcome!"
, "Knock knock. Who's there? Boo. Boo who? Don't cry, I'm only joking!"
, "Knock knock. Who's there? Norma Lee. Norma Lee who? Normally I ring the doorbell."
, "Knock knock. Who's there? Annie. Annie who? Is Annie body home?"
, "Knock, knock. Who’s there? Wa. Wa who? What are you so excited about?!"
, "Knock knock. Who's there? Lettuce. Lettuce who? Lettuce in."
, "Knock, knock. Who’s there? Leon. Leon who? Leon me when you’re not strong!"
, "Knock knock. Who's there? Adore. Adore who? Adore is between us, so please open up!"
, "Knock knock. Who's there? A little old lady. A little old lady who? Wow, I didn’t know you could yodel!"
, "Knock, knock. Who’s there? Lena. Lena who? Lena a little closer, and I’ll tell you another joke!"
, "Knock knock. Who's there? Candice. Candice who? Candice joke get any worse"
, "Knock, knock. Who’s there? Goliath. Goliath who? Goliath down, you look-eth tired!"
, "Knock, knock. Who’s there? Broccoli? Broccoli who? Broccoli doesn’t have a last name, silly."
, "Knock, knock. Who’s there? Wooden shoe. Wooden shoe who? Wooden shoe like to hear another joke?"
, "Knock knock. Who’s there? Jimmy. Jimmy who? Jimmy crack corn and I don’t care!"
, "Knock, knock. Who’s there? Cows go. Cows go who? No silly, cows go MOO!"
, "Knock, knock. Who’s there? Harry. Harry who? Harry up and answer the door!"
, "Knock, knock. Who’s there? Cash. Cash who? No thanks, but I’ll take a peanut if you have one!"
, "Knock knock. Who’s there? Honeydew. Honeydew who? Honeydew you wanna dance?"
, "Knock knock. Who’s there? Juno. Juno who? Juno how funny this is?"
, "Knock knock. Who’s there? Weekend. Weekend who? Weekend do anything we want."
, "Knock knock. Who’s there? Watts. Watts who? Watts for dinner? I’m hungry."
, "If a child refuses to sleep during nap time, are they guilty of resisting a rest?"
, "If you need help building an ark, I Noah guy."
, "What did one wall say to the other wall? I’ll meet you at the corner!"
, "Whoever invented knock-knock jokes deserves a no-bell prize."
, "Don’t spell part backward. It’s a trap."
, "Do you know how scientists freshen their breath? With experi-mints!"
, "Two burglars stole a calendar last night, and they each got six months."
, "Would a cardboard belt be a waist of paper?"
, "I always wanted to be a doctor, but I didn't have the patients."
, "I'm on a seafood diet: When I see food, I eat it."
, "If at first you don't succeed, then skydiving isn't for you."
, "I was going to tell a pizza joke, but it was too cheesy."
, "I just flew into town and my arms are so tired."
, "I tried to do my homework but my pencil broke, so it was pointless."
, "I used to be addicted to the Hokey Pokey, but I turned myself around."
, "The more this towel dries, the wetter it gets."
, "I ate a clock yesterday, it was very time-consuming."
, "I've just written a song about tortillas; actually, it’s more of a w-rap."
, "What is black and white and red all over? A zebra with a sunburn."
, "Which animal makes the best pet? A cat, because it’s purr-fect."
, "What do you get from a pampered cow? Spoiled milk!"
, "What was the first animal in space? The cow who jumped over the moon."
, "Why do cows go to New York? To see the moo-sicals!"
, "Why did the pig have ink all over his face? Because he just came out of the pen."
, "What do you get when you cross a fish with an elephant? Swimming trunks!"
, "What sound do porcupines make when they kiss? \"Ouch!\""
, "What do you call a lazy baby kangaroo? A pouch potato."
, "What do rabbits eat for breakfast? IHOP."
, "Where do cows go on Friday nights? To the moo-vies."
, "If a seagull flies over the sea, what flies over the bay? A bagel."
, "Why couldn't the pony talk? Because she was just a little hoarse."
, "What is a bat's favorite sport? Baseball."
, "How do you make an octopus laugh? With ten-tickles."
, "How do you keep a bull from charging? Cancel its credit card."
, "Why didn't the teddy bear want dessert? He was already stuffed."
, "What do you call a dinosaur who wears glasses? A Do-you-think-he-sarus."
, "What did the buffalo say when his kid went to college? Bison."
, "Why couldn't the duck pay for dinner? His bill was too big."
, "What is a snake's favorite subject? Hiss-tory."
, "Why are penguins so awkward at parties? Because they can't break the ice."
, "What do you call a sleeping bull? A bull-dozer."
, "What did the farmer call the cow that had no milk? An udder failure."
, "Why do fish live in salt water? Because pepper makes them sneeze!"
, "Where did the music teacher leave her keys? In the piano!"
, "Why was the math book sad? It had a lot of problems."
, "What did the paper say to the pencil? Write on."
, "Why did the student eat his homework? Because his teacher said it was a piece of cake."
, "Where do pencils come from? Pennsylvania."
, "What do kids do during recess on rainy days? Play bored games."
, "Why don't science teachers trust atoms? Because they make up everything."
, "How did the student feel when he learned about electricity? Totally shocked."
, "Why did the bikes get detention at school? They spoke too much."
, "Why didn't anyone want to eat next to the basketball team? Because they dribble too much."
, "What did the student say to the teacher after he missed the first day of school? No, ma'am. I didn't miss it at all."
, "How does a science teacher freshen her breath? With experi-mints!"
, "What do elves learn in school? The elf-abet."
, "Why couldn't the sesame seed leave the casino? Because he was on a roll."
, "What does a nosy pepper do? Gets jalapeno business."
, "Why did the cookie go to the nurse? Because he felt crumby."
, "What kind of room doesn't have doors? A mushroom."
, "Why did the girl throw a stick of butter out the window? She wanted to see a butterfly."
, "How do you open a banana? With a mon-key."
, "What do you call a fake noodle? An impasta."
, "What do you call stolen cheddar? Nacho cheese!"
, "What did Baby Corn say to Mama Corn? Where's Pop Corn?"
, "How does a cucumber become a pickle? It goes through a jarring experience."
, "Why oranges wear sunscreen? So they don't peel."
, "Why was there peanut butter on the road? To go with the traffic jam."
, "What does the Invisible Man drink at snack time? Evaporated milk."
, "What did the cake say to the fork? \"You want a piece of me?"
, "What does a pickle say when he wants to play cards? \"Dill me in!"]

function randomJokes(joke) { 
  let random = Math.floor(Math.random()*jokes.length);
  document.getElementById("joke").innerHTML = jokes[random];

//document.getElementsByName("joke")[0].innerHTML = jokes[random];
//document.getElementsByClassName("joke")[0].innerHTML = jokes[random];
//document.getElementsByTagName("p")[0].innerHTML = jokes[random];
  
}

randomJokes()

//another way
function randomJokes(joke) { 
  let random = Math.floor(Math.random()*jokes.length);
  joke.innerHTML = jokes[random]
}
randomJokes(joke)

// without function
let random = Math.floor(Math.random()*jokes.length);
joke.innerHTML = jokes[random]

// L-50  Exercise 3: Solution

// <div id="joke">This is a sample joke</div>

let myjokes = [
  {
    "category": "Programming",
    "type": "single",
    "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 12,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 18,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
    "flags": {
      "nsfw": true,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "id": 30,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 41,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "\"We messed up the keming again guys.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 20,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 5,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 221,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
    "flags": {
      "nsfw": true,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "safe": false,
    "id": 305,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 57,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 24,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 259,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 208,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Misc",
    "type": "single",
    "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 201,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 42,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 23,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 34,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "single",
    "joke": "How do you make holy water? You boil the hell out of it.",
    "flags": {
      "nsfw": false,
      "religious": true,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 202,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 0,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "safe": false,
    "id": 274,
    "lang": "en"
  },
  {
    "category": "Misc",
    "type": "single",
    "joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": true,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 233,
    "safe": false,
    "lang": "en"
  }

]

let index = Math.floor(Math.random() * (myjokes.length - 1))
console.log(index)
joke.innerHTML = myjokes[index].joke

