document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const songTitle = document.getElementById("song-title");
    const playlistItems = document.querySelectorAll("#playlist li");
    
    let currentSongIndex = 0;
    const songs = Array.from(playlistItems).map(item => ({
        src: item.dataset.src,
        title: item.textContent
    }));

    function loadSong(index) {
        audioPlayer.src = songs[index].src;
        songTitle.textContent = songs[index].title;
        audioPlayer.play();
    }

    playlistItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
        });
    });

    document.getElementById("play").addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    });
});
