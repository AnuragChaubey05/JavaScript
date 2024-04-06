// L-65  Exercise 5: Hackerman

async function hack() {
   p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Initializing Hack Program");
    }, 1000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hacking Ravi's username");
    }, 2000);
  });

  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Username found ravi_17");
    }, 3000);
  });

  setTimeout(() => {
    console.log("Connecting to faceboob.com");
  }, 4000);
  

}



// L-72  Exercise 5: Hackerman Solution


let a = [
        "Initializing Hack tool...",
        "Connecting to Facebook...",
        "Connecting to server 1...",
        "Connection failed. Retrying...",
        "Connecting to server 2",
        "Connected Successfully...",
        "Username iamharry...",
        "Trying Brute Force...",
        "200K passwords tried...",
        "Match not found",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match found...",
        "Accessing Account...",
        "Hack Successful..."
]

const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve(true) }, seconds * 1000)
        })
}

const showHack = async (message) => {
        await sleep(2)
        // console.log(message)
        text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
        for (let i = 0; i < a.length; i++) {
                await showHack(a[i])
        }
})()
