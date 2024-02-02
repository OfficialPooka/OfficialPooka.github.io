enter = document.getElementById("enter");
var click = new Audio("assets/click-2.wav");
var loaded = 0;
var nowPlaying = document.getElementById("now-playing");

const songs = ["SEX JAZZ v2.mp3", "1324.mp3", "1230 20XX [pooka].mp3"];
var songIndex = Math.floor(Math.random() * songs.length);
const music = new Audio("assets/music/" + songs[songIndex]);

function displayNowPlaying() {
    nowPlaying.textContent = "Now Playing - " + songs[songIndex];
    nowPlaying.style.animation = "now-playing";
    nowPlaying.style.animationDuration = "5s";
    nowPlaying.style.animationFillMode = "forwards";
};

function playSong() {
    console.log(music);
    console.log("Now Playing - " + songs[songIndex])
    music.play();
    displayNowPlaying();
};

enter.onclick = function loadshit() {

        // makes enter button disappear
    if (loaded < 1) {
        document.getElementById("enter-fx").style.animation = "enter-fx";
        document.getElementById("enter-fx").style.animationDuration = "1s";
        document.getElementById("enter-fx").style.animationFillMode = "forwards";
        document.getElementById("enter-fx").style.animationTimingFunction = "cubic-bezier(0,.54,0,.99)"
        enter.style.animation = "outro-button";
        enter.style.animationDuration = "1.5s";
        enter.style.animationFillMode = "forwards";

        //playes sfx
        click.play();
        
        // move shit into frame
        document.getElementById("navbar").style.bottom = 0;

        // move shit out of frame 
        document.getElementById("title").style.top = "-25%";
        document.getElementById("title-bg").style.top = "-25%";
        document.getElementById("bottom-text").style.bottom = "-25%";

        console.log("big dicks");
        loaded++;   
    }
};
