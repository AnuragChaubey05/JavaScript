// L-51  Exercise 4: Clock using JavaScript 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Watch</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0; /* Default light mode background color */
        color: #333; /* Default light mode text color */
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .watch {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        padding: 20px;
      }

      h1 {
        font-size: 3em;
        margin-bottom: 20px;
      }

      p {
        font-size: 2em;
        margin: 10px 0;
      }

      .time {
        display: flex;
        justify-content: center;
        align-items: center; /* Center content vertically */
      }

      .time p {
        margin: 0 5px; /* Adjust spacing between time elements */
      }

      #dark-mode-toggle {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
      }


      .toggle {
        
        --size: 2rem;
        appearance: none;
        outline: none;
        cursor: pointer;
        width: var(--size);
        height: var(--size);
        box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
        border-radius: 999px;
        color: hsl(0, 0%, 2%);

        transition: all 500ms;

        &:checked {
          --ray-size: calc(var(--size) * -0.4);
          --offset-orthogonal: calc(var(--size) * 0.65);
          --offset-diagonal: calc(var(--size) * 0.45);

          transform: scale(0.75);
          color: hsl(40, 100%, 50%);
          box-shadow: inset 0 0 0 var(--size),
            calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
            var(--offset-orthogonal) 0 0 var(--ray-size),
            0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
            0 var(--offset-orthogonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1)
              0 var(--ray-size),
            var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0
              var(--ray-size),
            var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0
              var(--ray-size);
        }

      }


      .toggle {
  z-index: 1;
  &:checked {
    & ~ .title {
      --color: hsl(40, 100%, 50%);
    }
  }
}

.title {
  --color: hsl(240, 100%, 95%);
  color: var(--color);
  z-index: 1;
  cursor: pointer;
  display: block;
  padding: 0.5rem 0 0;
  transition: color 500ms;
}

      /* Responsive Styles */
      @media only screen and (max-width: 600px) {
        .watch {
          padding: 10px;
        }

        h1 {
          font-size: 2em;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.5em;
          margin: 8px 0;
        }

        #dark-mode-toggle {
          font-size: 1.2em;
        }
      }
    </style>
  </head>
  <body>
    <div class="watch">
      <h1>Digital Clock</h1>
      <div>
        <p id="date"></p>
      </div>
      <div class="time">
        <p id="hour"></p>
        <p id="minutes"></p>
        <p id="seconds"></p>
        <p id="meridiem"></p>
      </div>

      <input id="dark-mode-toggle" class="toggle" type="checkbox" onclick="toggleDarkMode()">

    </div>

    <script>
      function updateTime() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hour = now.getHours();
        const meridiem = hour >= 12 ? "PM" : "AM";
        const formattedHour = ((hour + 11) % 12) + 1;

        document.getElementById("hour").innerHTML = formattedHour + " : ";
        document.getElementById("minutes").innerHTML = "  " + minutes + " : ";
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("meridiem").innerHTML = " " + meridiem;

        const options = {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        };
        const formattedDate = now.toLocaleDateString("en-IN", options);
        document.getElementById("date").innerHTML = formattedDate;
      }

      setInterval(updateTime, 1000);

      const toggle = document.querySelector(".toggle");
      const hours = new Date().getHours();
      toggle.checked = hours > 7 && hours < 20;

      function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
          body.style.background = "black";
          body.style.color = "white";
        } else {
          body.style.background = "white";
          body.style.color = "black";
        }
      }
    </script>
  </body>
</html>

// L-64   Exercise 4: Solutions & Shoutouts

<!DOCTYPE html>
<html>

<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>replit</title>
        <link href="style.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                crossorigin="anonymous">

</head>

<body>
        <div class="text-center fs-1 text">
                <div class="badge bg-primary text-wrap text-center" id="time"></div>
        </div>
        <script src="script.js"></script>

        <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossorigin="anonymous"></script>

        <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html>

//css
html, body {
  height: 100%;
  width: 100%;
        background: #5a99dd !important;
}


//js
function getDateTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        if (month.toString().length == 1) {
                month = '0' + month;
        }
        if (day.toString().length == 1) {
                day = '0' + day;
        }
        if (hour.toString().length == 1) {
                hour = '0' + hour;
        }
        if (minute.toString().length == 1) {
                minute = '0' + minute;
        }
        if (second.toString().length == 1) {
                second = '0' + second;
        }
        var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
        return dateTime;
}

// example usage: realtime clock
setInterval(function() {
        currentTime = getDateTime();
        document.getElementById("time").innerHTML = currentTime;
}, 1000);


