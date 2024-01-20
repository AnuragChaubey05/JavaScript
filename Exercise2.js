// Exercise2 - Snake Water Gun

// L-30  Exercise2 - Snake Water Gun
// L-39  Exercise2 - Snake Water Gun

let guess = ["Snake", "Gun", "Water"];
let guess1 = guess[Math.floor(Math.random() * guess.length)];
console.log("Computer guess is", guess1);

let guess2 = prompt("Choose from Snake, Water, Gun", "Water");

// Check if the user clicked "Cancel"
if (guess2 === null) {
  console.log("Game canceled by the user.");
} else {
  console.log("Your guess is", guess2);

  function determineWinner(guess1, guess2) {
    if (guess1 === guess2) {
      return `"It's a tie!", computer's guess is ${guess1}`;
    } else if (
      (guess1 === "Snake" && guess2 === "Water") ||
      (guess1 === "Gun" && guess2 === "Snake") ||
      (guess1 === "Water" && guess2 === "Gun")
    ) {
      return `"Computer wins!", computer's guess is ${guess1}`;
    } else {
      return `"You wins!", computer's guess is ${guess1}`;
    }
  }

  // Call determineWinner with the computer's and user's choices
  let result = determineWinner(guess1, guess2);

  // Display the result in an alert or log it to the console
  alert(result);
  console.log(result);
}

// harrry bhai

let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user)=>{
  if(cpu === user){
    return "Nobody"
  }
  else if(cpu === "S" && user==="W"){
    return "cpu"
  }
  else if(cpu === "S" && user==="G"){
    return "user"
  }
  else if(cpu === "G" && user==="W"){
    return "user"
  }
  else if(cpu === "G" && user==="S"){
    return "cpu"
  }
  else if(cpu === "W" && user==="S"){
    return "user"
  }
  else if(cpu === "W" && user==="G"){
    return "cpu"
  }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )
