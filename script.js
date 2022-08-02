const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const box = document.querySelector(".container");
const box2 = document.querySelector(".box-2");
const turbine = document.querySelector(".jet-engine");
const turbine2 = document.querySelector(".jet-engine2");
const jetbox = document.querySelector(".extras");
const engineinfo = document.getElementById("engineinfo");


function showAi(){
   document.getElementById("starting").play();
   box.style.display = "none";
   content.style.display = "block";
   btn.style.display = "block";
   box2.style.display = "block";
   engineinfo.style.display = "block";
   jetbox.style.display = "block";
   turbine.style.animation = "spin 0.1s ease-in infinite";
   turbine2.style.animation = "spin 0.1s ease-in infinite";
};


function offfun(){
   content.innerHTML = "We're Offline 😞"
   content.style.color = "red";
};

function onfun(){
  content.innerHTML = "We're Online 😀";
  content.style.color = "lightgreen";
};



     
const YouTube = [
'Opening YouTube'
];

const spotify = [
'Opening Spotify'
];
      
const Facebook = [
'Opening Facebook'
];
          
const whoareyou = [
 'My name is Veyron'
];
        
const Songs = [
 'Playing'
];

          
          

          
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onstart = function(){
console.log('How Can I Help You ?')}
        
recognition.onresult = function (event) 

{
const current = event.resultIndex;
const transcript = event.results[current][0].transcript;
content.textContent = transcript;
readOutLoud(transcript);
  
};


btn.addEventListener('click', () =>{
    recognition.start();
});


function readOutLoud(message){
const speech = new SpeechSynthesisUtterance();

 speech.text = 'Sorry , i am not able to understand';

  
  // opening youtube


if(message.includes('YouTube')){
const finalText = YouTube[Math.floor(Math.random()*YouTube.length)];
speech.text = finalText;
window.open('https://www.youtube.com/')}
                
  
  
  //opening  spotify
  
  
if(message.includes('spotify')){
const finalText = spotify[Math.floor(Math.random()*spotify.length)];
speech.text = finalText;
window.open('https://open.spotify.com/')}
            
            
//opening Facebook


if(message.includes('Facebook')){
const finalText = Facebook[Math.floor(Math.random()*Facebook.length)];
speech.text = finalText;
window.open('https://www.facebook.com/')}




if(message.includes('search for')){
window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");

const finalText = "This is what i found on Internet";

speech.text = finalText;

  
}
    




if(message.includes('what is your name')){
const finalText = 
whoareyou[Math.floor(Math.random()*whoareyou.length)];
speech.text = finalText; 

}



//*PLAYING BTS*//



if(message.includes('play Dynamite')){
const finalText = 
Songs[Math.floor(Math.random()*Songs.length)];
speech.text = finalText;
console.log("Playing Now!")
document.getElementById("Dynamite").play();
document.getElementById("filter").pause();
}





if(message.includes('play filter')){
const finalText = 
Songs[Math.floor(Math.random()*Songs.length)];
speech.text = finalText;
console.log("Playing Now!")
document.getElementById("filter").play();
document.getElementById("Dynamite").pause();
}





speech.volume = 1;
speech.rate = 1;
speech.lang = 'en-US';
speech.pitch = 1;

window.speechSynthesis.speak(speech);

}
