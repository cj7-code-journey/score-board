//initializing the scores
let homescore = 0;
let guestscore = 0;
//displaying the initial scores
document.getElementById("home-score").textContent = homescore;
document.getElementById("guest-score").textContent = guestscore;

//getting the score elements
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

//functions to add score to home and guest
//home score functions
function homeadd1() {
    homescore += 1;
    homeScore.textContent = homescore;
}
function homeadd2() {
    homescore += 2;
    homeScore.textContent = homescore;
}
function homeadd3() {
    homescore += 3;
    homeScore.textContent = homescore;
}
function homeremove1() {
    homescore -= 1;
    homeScore.textContent = homescore;
}
function homeremove2() {
    homescore -= 2;
    homeScore.textContent = homescore;
}
function homeremove3() {
    homescore -= 3;
    homeScore.textContent = homescore;
}

//guest score functions
function guestadd1() {
    guestscore += 1;
    guestScore.textContent = guestscore;
}
function guestadd2() {
    guestscore += 2;
    guestScore.textContent = guestscore;
}
function guestadd3() {
    guestscore += 3;
    guestScore.textContent = guestscore;
}
function guestremove1() {
    guestscore -= 1;
    guestScore.textContent = guestscore;
}

function guestremove2() {
    guestscore -= 2;
    guestScore.textContent = guestscore;
}

function guestremove3() {
    guestscore -= 3;
    guestScore.textContent = guestscore;
}
//function to reset the scores
function resethomescore() {
    homeScore.textContent = 0;
    homescore = 0;
}
function resetguestscore() {
    guestScore.textContent = 0;
    guestscore = 0;
}
//timer functionality
let timer;
let totalSeconds = 0;
function starttime() {
    timer = setInterval(setTime, 1000);
}
function setTime() {
    ++totalSeconds;
    let hour = Math.floor(totalSeconds / 3600);
    let min = Math.floor((totalSeconds - hour * 3600) / 60);
    let sec = totalSeconds - (hour * 3600 + min * 60);
    document.getElementById("hour").textContent = pad(hour);
    document.getElementById("min").textContent = " : " + pad(min) + " :";
    document.getElementById("sec").textContent = pad(sec);
}
function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
//function to stop the timer
function stoptime() {
    clearInterval(timer);
}
//function to reset the timer
function resettimer() {
    clearInterval(timer);
    totalSeconds = 0;
    document.getElementById("hour").textContent = "00";
    document.getElementById("min").textContent = " : 00 :";
    document.getElementById("sec").textContent = "00";
}

