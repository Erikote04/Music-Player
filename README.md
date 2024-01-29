# Music Player App

## Overview

The **Music Player App** is a web-based application designed to provide users with a simple and intuitive interface for playing and managing a playlist of songs. The app includes essential features such as play, pause, skip, shuffle, and playlist management.

<img width="470" alt="music-player" src="https://github.com/Erikote04/Music-Player/assets/126704751/c43076f8-b37e-41eb-b74a-074f0f1caeb8">
<img width="315" alt="music-player-media-query" src="https://github.com/Erikote04/Music-Player/assets/126704751/8185836b-3333-44ff-a515-463d44fad40d">


## Features

### 1. Player Controls

- **Previous:** Skip to the previous song.
- **Play/Pause:** Start or pause the current song.
- **Next:** Skip to the next song.
- **Shuffle:** Shuffle the playlist order for a dynamic listening experience.

### 2. Playlist Management

- **Delete Song:** Remove unwanted songs from the playlist.
- **Reset Playlist:** Reset the playlist to the default set of songs.

## How to Use

1. **Player Controls:**
   - Click the "Previous" button to skip to the previous song.
   - Use the "Play/Pause" button to start or pause the current song.
   - Click the "Next" button to skip to the next song.
   - The "Shuffle" button rearranges the playlist for a randomized order.

2. **Playlist Management:**
   - Each song in the playlist displays its title, artist, and duration.
   - Click on a song to play it.
   - Use the "Delete" button to remove a song from the playlist.

## Playlist Display

- The main screen shows the current song's title and artist.
- The playlist is displayed with options to play or delete each song.

## Playlist Reset

- If the playlist is empty, a "Reset Playlist" button appears.
- Clicking this button restores the default playlist.

## Script Structure

- The script (`script.js`) is well-organized with functions for each feature.
- Event listeners are set up for player controls and playlist interactions.

## Customization

Feel free to customize the playlist by adding or removing songs in the `allSongs` array in `script.js`.

```javascript
const allSongs = [
  {
    id: 0,
    title: "Your Song Title",
    artist: "Artist Name",
    duration: "4:00",
    src: "https://your-audio-source-url.mp3",
  },
  // Add more songs as needed...
];
```

## Dependencies

- [Roboto Mono](https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap)
- [Lato](https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Mono&display=swap)

## Getting Started

1. Clone the repository:
   `git clone https://github.com/Erikote04/Music-Player.git`
  
2. Open index.html in your preferred web browser.

3. Start listening to music!
