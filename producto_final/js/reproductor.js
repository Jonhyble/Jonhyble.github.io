var holding = false;
var play = document.getElementById('reproducir');
var next = document.getElementById('siguiente');
var prev = document.getElementById('anterior');
var title = document.getElementById('titulo-reproductor');
var artist = document.getElementById('artista-reproductor');
var art = document.getElementById('caratula-reproductor');
var current_track = 0;
var song, audio, duration;
var playing = false;

var songs = [{
    title: 'Awaken',
    artist: 'Dethklok',
    url: 'musica/Awaken.mp3',
    art: 'imagenes/Awaken.jpg'
},
    
{
    title: 'Blood // Water',
    artist: 'Grandson',
    url: 'musica/Blood.mp3',
    art: 'imagenes/Blood.jpg'
},

{
    title: 'Cradles',
    artist: 'Sub Urban',
    url: 'musica/Cradles.mp3',
    art: 'imagenes/Cradles.jpg'
},

{
    title: 'Gangsta Paradise',
    artist: 'Coolio',
    url: 'musica/Gangsta.mp3',
    art: 'imagenes/Gangsta.jpg'
},

{
    title: 'Mortal Reminder',
    artist: 'Pentakill',
    url: 'musica/Pentakill.mp3',
    art: 'imagenes/Pentakill.jpg'
},
{
    title: 'Play with fire',
    artist: 'Sam Tinnesz',
    url: 'musica/Play.mp3',
    art: 'imagenes/Play.jpg'
}];

window.addEventListener('load', init(), false);

function init() {
    song = songs[current_track];
    audio = new Audio();
    audio.src = song.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
}

audio.addEventListener('loadedmetadata', function () {
    duration = this.duration;
}, false);
window.onmousemove = function (e) {
    e.preventDefault();
    if (holding) seekTrack(e);
}
window.onmouseup = function (e) {
    holding = false;
    console.log(holding);
}
play.onclick = function () {
    playing ? audio.pause() : audio.play();
}
audio.addEventListener("pause", function () {
    play.setAttribute("src", "imagenes/play.png");
    playing = false;
}, false);

audio.addEventListener("playing", function () {
    play.setAttribute("src", "imagenes/pausa.png");
    playing = true;
}, false);
next.addEventListener("click", nextTrack, false);
prev.addEventListener("click", prevTrack, false);


function seekTrack(e) {
    event = e || window.event;
    audio.play();
}
function nextTrack() {
    current_track++;
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function prevTrack() {
    current_track--;
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function updateInfo() {
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
    art.onload = function() {
        audio.play();
    }
}

function reproducir(num_cancion) {
    current_track = num_cancion;
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}