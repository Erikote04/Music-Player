const previousButton = document.getElementById("previous");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");
const playlistSongs = document.getElementById("playlist-songs");

const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
];
