console.log("welcome to spotify")
//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('songs/My Love Is Gone.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myProgressBar'); 
let gif=document.getElementById('gif');
let masterSongName=document.getElementsByClassName('let masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Neeve",filepath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Vachindamma Vachindamma",filepath:"songs/1.mp3",coverPath:"images/2.jpg"},
    {songName:"Netha_cheera",filepath:"songs/1.mp3",coverPath:"images/katamarayudu.jpg"},
    {songName:"Saripove",filepath:"songs/4.mp3",coverPath:"images/karthileya.jpg"},
    {songName:"Emo EMo",filepath:"songs/5.mp3",coverPath:"images/katamarayudu.jpg"},
    {songName:"Dheera Dheera",filepath:"songs6.mp3",coverPath:"images/Magadheera.jpg"}

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
//Handle Play/pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressBar.value=progress;

})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

})
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex.songName];
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex.songName];
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex.songName];
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

