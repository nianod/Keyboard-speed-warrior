
const body = document.getElementById("body")

    body.addEventListener("contextmenu", (event) => {
        event.preventDefault()
        alert("Right click is disabled");
    })

const timeLimit = document.getElementById("timer")
const realText = document.getElementById("texts")
const typingArea = document.getElementById("text")
const start = document.getElementById("start")
const contih = document.querySelector(".container")
const stop = document.getElementById("finish")
let count = 20;
let countDown

const actualTexts = [
    "IronMan is the best Avenger",
    "Learn to say no when necessary",
    "Writing on coloured text isn't just code, its a flex",
    "Don't worry about making mistakes, you'll recover",
    "If you discover someone has what you're praying for, become a blessing to them",
    "Longest league title drought among the traditional top six",
    "Decline in global stature and competitiveness compared to other European giants",
    "Everytime you level up, your old life will try to call you back. Don't answer",
    "This highlights a crucial point. Decision-making is the true differentiator at every level of the game",
    "Those who stay humble they become the become the legends",
    "Naming things is the final boss of programming",
    "Do not mess with system32 unless you're looking for trouble"
]
typingArea.addEventListener("paste", (event) => {
    event.preventDefault();
    alert("I see you👀, No cheating. Pasting is disabled😏")
})


typingArea.disabled = true
let complete = false;

start.addEventListener("click", () => {
    let count = 20
    typingArea.disabled = false
    complete = true
 


    countDown = setInterval(() => {
        count--;
        timeLimit.innerHTML = count;



        if(count == 0) {
            clearInterval(countDown)
            typingArea.disabled = true;
            
            alert("Hey time is up")
            giveResult.style.display = "block";
        } else {
            if(count === 10) {
                let warning = document.createElement("b")
                warning.innerHTML = "Time is running out"
                contih.appendChild(warning)
                warning.style.color = "red"
            }
        }
    }, 1000)
})

// if(start) {
//     alert("Already started");
// }

let score = document.getElementById("score");

let results = [];
const scores = () => {
    let writersResult = typingArea.value.trim();
    
    if (writersResult) {
        results.push(writersResult);
        score.innerHTML = results.map((r, i) => `<p>${i + 1}. ${r}</p>`).join("");
      }
    };
    
    let giveResult = document.createElement("button")
    giveResult.addEventListener("click", scores)
    giveResult.innerHTML = "see results"
    giveResult.style.marginBottom = "10px"
    giveResult.style.background = "green"
    giveResult.style.display = "none";
    score.appendChild(giveResult)
    


        stop.addEventListener("click", () => {
        if(!complete) {
            alert("you must start before you finish")
            return;
        } else {
        typingArea.disabled = true;
        giveResult.style.display = "block"
        clearInterval(countDown);
        }
    })


    const grade = () => {
        let remarks = writersResult
        if(remarks === realText.tolowercase()) {
            let seegrade = document.createElement("p")
            seegrade.textContent = "excellent";
            score.appendChild(seegrade);
            seegrade.style.color = "red"

        } else {
            seegrade.textContent = "Please try again";
            // seegrade.style.color = "red"
        }

    }
  

const randomtext = Math.floor(Math.random() * actualTexts.length)
realText.innerHTML = actualTexts[randomtext]