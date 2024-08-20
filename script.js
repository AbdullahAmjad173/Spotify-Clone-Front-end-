console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem')); // Corrected class name

let songs = [
    { songName: "Slam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Janam Janam", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Tui Asheqi", filePath: "song/3.mp3", coverPath: "covers/3.jpeg" },
    { songName: "Swera", filePath: "song/4.mp3", coverPath: "covers/4.jpeg" },
    { songName: "Din Dhalay", filePath: "song/5.mp3", coverPath: "covers/5.jpeg" },
    { songName: "Bella Chau", filePath: "song/6.mp3", coverPath: "covers/6.jpeg" },
    { songName: "lafz e kolim", filePath: "song/7.mp3", coverPath: "covers/11.jpeg" },
    { songName: "Hamnava mere", filePath: "song/8.mp3", coverPath: "covers/8.jpeg" },
    { songName: "tera naam", filePath: "song/9.mp3", coverPath: "covers/9.jpeg" },
    { songName: "bola dia tm na", filePath: "song/10.mp3", coverPath: "covers/10.jpeg" },
]

songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex}.mp3`; // Updated this line
         masterSongName.innerText =  songs[songIndex].songName;  
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;

    }
    audioElement.src = `song/${songIndex + 1}.mp3`; // Updated this line
    masterSongName.innerText =  songs[songIndex].songName;      
    audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = `song/${songIndex + 1}.mp3`; // Updated this line
    masterSongName.innerText =  songs[songIndex].songName;  
    audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})