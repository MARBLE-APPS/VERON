const btn = document.querySelector('.talk');

const content = document.querySelector('.content');

     
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
        
const Dynamite = [
'playing Dynamite Now'
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
window.open('https://open.facebook.com/')}




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






if(message.includes('play Dynamite')){
  
const finalText = 
Dynamite[Math.floor(Math.random()*Dynamite.length)];

speech.text = finalText;

}






speech.volume = 1;
speech.rate = 1;
speech.lang = 'en-US';
speech.pitch = 1;

window.speechSynthesis.speak(speech);

}
