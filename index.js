let homeScoreEl = document.getElementById("home-score");
let guestScoreEL = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function plus1Home() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function plus2Home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function plus3Home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function plus1Guest() {
    guestScore += 1;
    guestScoreEL.textContent = guestScore;
}

function plus2Guest() {
    guestScore += 2;
    guestScoreEL.textContent = guestScore;
}

function plus3Guest() {
    guestScore += 3;
    guestScoreEL.textContent = guestScore;
}

function resetScore() {
    homeScoreEl.textContent = 0;
    guestScoreEL.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}