console.log('Rain footage belongs to Soul Candle on YouTube');
console.log('Waves footage belongs to egawauemon on YouTube');
console.log('Birds singing footage belongs to Relaxing Sounds of Nature on YouTube');

var vid = document.getElementById("videoContainer");

var vidSource = document.getElementById("video");

var soundName = document.getElementById("sound");

var playButton = document.getElementById("play");

var pauseButton = document.getElementById("pause");

var rainButton = document.getElementById("rain");

var wavesButton = document.getElementById("waves");

var birdsButton = document.getElementById("birds")

vid.loop = true;

vid.volume = 1;

function playVideo(){

    vid.play();

    playButton.classList.add('hide');

    pauseButton.classList.remove('hide');


}

function pauseVideo(){

    vid.pause();

    playButton.classList.remove('hide');

    pauseButton.classList.add('hide');

}

function toWaves(){

    vidSource.src = 'waves.mp4';
    vid.load();
    soundName.innerHTML = 'Ocean Waves';

    rainButton.style.color = 'black';

    wavesButton.style.color = 'white';

    birdsButton.style.color = 'black';


}

function toRain(){

    vidSource.src = 'rain.mp4';
    vid.load();

    soundName.innerHTML = 'Rainy Days';

    rainButton.style.color = 'white';

    wavesButton.style.color = 'black';

    birdsButton.style.color = 'black';


}

function toBirds(){

    vidSource.src = 'birds.mp4';
    vid.load();

    soundName.innerHTML = 'Singing Birds';

    rainButton.style.color = 'black';

    wavesButton.style.color = 'black';

    birdsButton.style.color = 'white';



}