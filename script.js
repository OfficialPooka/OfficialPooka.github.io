enter = document.getElementById("enter");
var click = new Audio("assets/click-2.wav");
var loaded = 0;
var nowPlaying = document.getElementById("nowplaying");

const songs = ["@okpooka - 20XX 125 bpm", "@okpooka - cuddle team leader 130 bpm F min +50 cents", "@okpooka - wake up 140 bpm B min", "@okpooka @hiiidrax - doll 149 bpm", "@okpooka @iamsynthetic - monkey ball 132 bpm C# maj", "@okpooka @sn.aywhat - koe 138 bpm", "@okpooka @vvspipes - perfection 128 bpm D# min", "852 starbust [pooka]", "993 the light [pooka] beat", "1356_shark_tooth_pooka", "hiiidrax_x_okpooka_-_muffin_114bpm", "MORRIS + POOKA - FRUITIVADED 147 BPM", "morris + vvspipes + pooka - droptop 129", "pooka + kimj - my try 141 bpm C min -50 cents", "snow in april 153 @breezefore x @okpooka", "supa + pooka - iThink"];
var songIndex = Math.floor(Math.random() * songs.length);
const music = new Audio("assets/music/" + songs[songIndex] + ".mp3");

function displayNowPlaying() {
    nowPlaying.textContent = "Now Playing: " + songs[songIndex];
    //nowPlaying.style.animation = "nowplaying"; it used to fade out
    //nowPlaying.style.animationDuration = "5s";
    //nowPlaying.style.animationFillMode = "forwards";
};

function playSong() {
    console.log(music);
    console.log("Now Playing - " + songs[songIndex])
    //music.play();
    displayNowPlaying();
};

enter.onclick = function loadshit() {

        // makes enter button disappear
    if (loaded < 1) {
        document.getElementById("enter-fx").style.animation = "enter-fx";
        document.getElementById("enter-fx").style.animationDuration = "0.3s";
        document.getElementById("enter-fx").style.animationFillMode = "forwards";
        document.getElementById("enter-fx").style.animationTimingFunction = "cubic-bezier(0,.54,0,.99)"
        enter.style.animation = "outro-button";
        enter.style.animationDuration = "0.5s";
        enter.style.animationFillMode = "forwards";

        // plays sfx
        click.play();
        
        // move shit into frame
        document.getElementById("header").style.top = 0;

        // move shit out of frame 
        document.getElementById("title").style.top = "-25%";
        document.getElementById("title-bg").style.top = "-25%";
        document.getElementById("bottom-text").style.bottom = "-25%";

        playSong();
        loaded++;   
        //console.log(loaded);
    }
};

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
    }
    
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    
    hRotation = 30 * h + m / 2; //converting current time
    mRotation = 6 * m;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;

    setTimeout(showTime, 17000); // setting it as something 60k isnt divisible by makes it have a chance of updating sooner than later as opposed to updating at the same offset every time like with 20 seconds
}

showTime();

i = 0

function rotateTest() {
    i++
        hour.style.transform = `rotate(${i/5}deg)`; 
        minute.style.transform = `rotate(${i/2}deg)`;
    setTimeout(rotateTest, 10);
}

//rotateTest();