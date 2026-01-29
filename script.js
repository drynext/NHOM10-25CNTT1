const songs = [
  {name:"APT", file:"music/song1.mp3"},
  {name:"Espresso", file:"music/song2.mp3"},
  {name:"Flowers", file:"music/song3.mp3"},
  {name:"Daylight", file:"music/song4.mp3"},
  {name:"Snooze", file:"music/song5.mp3"}
];

let current = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("nowPlaying");

function loadSong(i){
  audio.src = songs[i].file;
  title.innerText = "🎧 Đang phát: " + songs[i].name;
  audio.play();
}

function playRandom(){
  current = Math.floor(Math.random() * songs.length);
  loadSong(current);
}

function nextSong(){
  current = (current + 1) % songs.length;
  loadSong(current);
}

function prevSong(){
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
}
