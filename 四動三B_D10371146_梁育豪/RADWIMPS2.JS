var audio1 = document.getElementById("audio1");
var Button = document.querySelector(".R1");

var audio2 = document.getElementById("audio2");
var Button = document.querySelector(".R2");

var audio3 = document.getElementById("audio3");
var Button = document.querySelector(".R3");

var audio4 = document.getElementById("audio4");
var Button = document.querySelector(".R4");

var audio5 = document.getElementById("audio5");
var Button = document.querySelector(".R5");

var audio6 = document.getElementById("audio6");
var Button = document.querySelector(".R6");

var audio7 = document.getElementById("audio7");
var Button = document.querySelector(".R7");

var audio8 = document.getElementById("audio8");
var Button = document.querySelector(".R8");

var audio9 = document.getElementById("audio9");
var Button = document.querySelector(".R9");

var audio10 = document.getElementById("audio10");
var Button = document.querySelector(".R10");

var audio11 = document.getElementById("audio11");
var Button = document.querySelector(".R11");

var audio12 = document.getElementById("audio12");
var Button = document.querySelector(".R12");

var audio13 = document.getElementById("audio13");
var Button = document.querySelector(".R13");

var audio14 = document.getElementById("audio14");
var Button = document.querySelector(".R14");

function togglePlay(audio, button) {
    if (audio.paused) {
        audio.play();
        button.innerHTML = "暫停歌曲";
    } else {
        audio.pause();
        audio.currentTime = 0;

    }
}

window.onload = function () {
    document.body.className += ' loaded'
};

