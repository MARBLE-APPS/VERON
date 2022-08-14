const API = "3045dd712ffe6e702e3245525ac7fa38";

const originbox = document.querySelector(".made-in-india");

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const box = document.querySelector(".container");
const hr = document.getElementById("hr");
const hr1 = document.getElementById("hr1");
const box2 = document.querySelector(".box-2");
const turbine = document.querySelector(".jet-engine");
const turbine2 = document.querySelector(".jet-engine2");
const jetbox = document.querySelector(".extras");
const engineinfo = document.getElementById("engineinfo");
const temphead = document.getElementById("temphead");
const temp = document.getElementById("temperature");
const cloudscondition = document.getElementById("weather-con");
const weatherdisplay = document.querySelector(".weather-display")


function showAi(){
  document.getElementById("starting").play();
  box.style.display = "none";
  content.style.display = "block";
  btn.style.display = "block";
  box2.style.display = "block";
  engineinfo.style.display = "block";
  weatherdisplay.style.display = "block";
  temphead.style.display = "block";
  jetbox.style.display = "block";
  turbine.style.animation = "spin 0.1s ease-in infinite";
  turbine2.style.animation = "spin 0.1s ease-in infinite";
  hr.style.display = "block";
  hr1.style.display = "block";
  originbox.style.display = "none";
};


function offfun(){
   content.innerHTML = "We're Offline 😞"
   content.style.color = "red";
};

function onfun(){
  content.innerHTML = "We're Online 😀";
  content.style.color = "lightgreen";
};


     
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
speech.text = "sorry. i did not catch your words";

  
// opening youtube

if(message.includes('YouTube')){
const finalText = "opening...";
speech.text = finalText;
window.open('https://www.youtube.com/')}
  
  
//opening  spotify

if(message.includes('spotify')){
const finalText = "opening...";
speech.text = finalText;
window.open('https://open.spotify.com/')}
            
            
//opening Facebook


if(message.includes('Facebook')){
const finalText = "opening...";
speech.text = finalText;
window.open('https://www.facebook.com/')}


if(message.includes('search for')){
window.open(`https://www.google.com/search?q=${message.replace("search for", "+")}`, "_blank");
const finalText = "This is what i found on Internet";
speech.text = finalText;
}
  

//questions banks

if(message.includes('what is your name')){
const finalText = "My Name Is VEYRON";
speech.text = finalText;
}

if(message.includes("hello")) {
  const finalText = "Hi There. is you have any query? try saying search for. before your question";
  speech.text = finalText;
}


if(message.includes("Gali")) {
   const finalText = "No! my Developer don't give me this type of education";
   speech.text = finalText;
}


if(message.includes("very good")) {
  const finalText = "Thanks For Complement";
  speech.text = finalText;
}



if(message.includes("weather in")){
function convertion(val) {
  return (val - 273).toFixed(2)
}
fetch('https://api.openweathermap.org/data/2.5/weather?q='+message.replace("weather in", "+")+'&appid='+ API)
.then(res => res.json())
.then(data => {
const temperature = data['main']['temp'];
var nameval = data['name'];
var cloudsC = data.weather[0].main;
  
  city.innerHTML = nameval;
  temp.innerHTML = `Temperature :  ${convertion(temperature)}°C`;
  cloudscondition.innerHTML = cloudsC;
})
const finalText = "Weather is now in your  temperature area";
speech.text = finalText;
};



speech.volume = 1;
speech.rate = 1;
speech.lang = 'en-US';
speech.pitch = 1;
window.speechSynthesis.speak(speech);
}
