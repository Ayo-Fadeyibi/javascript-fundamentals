const playlistSongs = document.querySelector('#playlist-songs');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const playingSong = document.querySelector('#player-song-title');
const songArtist = document.querySelector('#player-song-artist');

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

const audio = new Audio();

let userData ={
  songs: allSongs,
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id, start = true) => {
  const song = userData.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
  if(userData.currentSong === null || start){
    audio.currentTime = 0;
  }else{
    audio.currentTime = userData.songCurrentTime;
  }

  playButton.classList.add('playing');
  userData.currentSong = song;
  setPlayerDisplay();
  highlightCurrentSong();
  setPlayButtonAccessibleText();
  audio.play();
}

playButton.addEventListener('click', () => {
  if(userData.currentSong === null){
    playSong(userData.songs[0].id);
  }else{
    playSong(userData.currentSong.id, false);
  }
});

const songs = document.querySelectorAll('.playlist-song');

songs.forEach((song) => {
  const button = song.querySelector('button');
  button.addEventListener('click', () => {
    let songId = song.getAttribute('id');
    let songIndex = songId.split('-')[1];
    songId = parseInt(songIndex, 10);
    playSong(songId);
  });
});  

function pauseSong() {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove('playing');
  audio.pause();
}

pauseButton.addEventListener('click', pauseSong);

function getCurrentSongIndex() {
  return userData.songs.indexOf(userData.currentSong);
}

function getNextSong() {
  return userData.songs[getCurrentSongIndex() + 1];
}

const playNextSong = () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
    return
  }
  const nextSong = getNextSong();
  if (nextSong) {
    playSong(nextSong.id);
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
    pauseSong();
  }
}

nextButton.addEventListener('click', playNextSong);

function getPreviousSong() {
  return userData.songs[getCurrentSongIndex() - 1];
}

function playPreviousSong() {
  if (userData.currentSong === null) {
    return
  }
  const previousSong = getPreviousSong();
  if (previousSong) {
    playSong(previousSong.id);
  } else {
    playSong(userData.songs[0].id);
  } 
}

previousButton.addEventListener('click', playPreviousSong);

function highlightCurrentSong() {
  songs.forEach((song) => {
    let ariaCurrent = song.getAttribute('aria-current');
    if (ariaCurrent) {
      song.removeAttribute('aria-current');
    }
  });
  let songToHighlight = document.getElementById(`song-${userData.currentSong?.id}`);
  if (songToHighlight) {
    songToHighlight.setAttribute('aria-current', 'true');
  }
}

function setPlayerDisplay() {
  if (userData.currentSong) {
    playingSong.textContent = userData.currentSong.title;
    songArtist.textContent = userData.currentSong.artist;
  } else {
    playingSong.textContent = '';
    songArtist.textContent = '';
  }
}

function setPlayButtonAccessibleText() {
  playButton.setAttribute('aria-label', `${userData.currentSong?.title ? `Play ${userData.currentSong.title}` : 'Play'}`);
}

audio.addEventListener('ended', playNextSong);
