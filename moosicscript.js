
function changeTabTitleAndRedirect() {
    // Change the title of the current tab
    document.title = "Litcode - You're About to Get Confused!";

    // Redirect to the GIF
    window.location.href = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpjcTJxZWd0NmtrcnQ3a2hjZHN0NHVndGJya3E5cW04bjF0OW8ydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N25nrRX4rsnkY/giphy.gif';
}
function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'block';
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'none';
}

// Close the dialog when clicking outside of it
window.onclick = function(event) {
    const loginDialog = document.getElementById('loginDialog');
    const registerDialog = document.getElementById('registerDialog');
    if (event.target === loginDialog) {
        loginDialog.style.display = 'none';
    }
    if (event.target === registerDialog) {
        registerDialog.style.display = 'none';
    }
};
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
            console.log('Error loading page:', error);
        });
}


const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assetsmusic/Bruno Mars - Talking To The Moon.mp3',
        displayName: 'Talking To The Moon',
        cover: 'assetsmusic/tttm-bruno.jpg',
        artist: 'Bruno Mars',   
    },
    {
        path: 'assetsmusic/James Arthur - Can I Be Him.mp3',
        displayName: 'Can I Be Him',
        cover: 'assetsmusic/cibh-james.jpg',
        artist: 'James Arthur',
    },
    {
        path: 'assetsmusic/Joji - Glimpse of Us.mp3',
        displayName: 'Glimpse Of Us',
        cover: 'assetsmusic/gou-joji.jpg',
        artist: 'Joji',
    },
    {
        path: 'assetsmusic/K. - Cigarettes After Sex.mp3',
        displayName: 'K.',
        cover: 'assetsmusic/cas-k.jpg',
        artist: 'Cigarettes After Sex',
    },
    {
        path: 'assetsmusic/LANY - Thru These Tears.mp3',
        displayName: 'Thru These Tears',
        cover: 'assetsmusic/ttt-lany.jpg',
        artist: 'LANY',
    },
    {
        path: 'assetsmusic/TAKE ALL THE LOVE - Arthur Nery.mp3',
        displayName: 'Take All The Love',
        cover: 'assetsmusic/tatl-arthur.jpg',
        artist: 'Arthur Nery',
    },
    {
        path: 'assetsmusic/The Day You Said Goodnight - Hale.mp3',
        displayName: 'The Day You Said Goodnight',
        cover: 'assetsmusic/tdysg-hale.jpg',
        artist: 'Hale',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
