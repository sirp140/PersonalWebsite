//create variables
let sky = document.getElementById("sky");
let bird = document.getElementById("bird");
let greetingText = document.getElementById("greetingText");

//create object to keep movement rates
let rates = {
  sky: 0.05,
  bird: 0.5,
  greetingText: 0.5
}

//event handler function for userScroll
const userScroll = () => {
  let scrollDistance = window.scrollY;
  sky.style.top = scrollDistance * rates.sky  + 'px';
  bird.style.left = -scrollDistance * rates.bird + 'px';
  //peak.style.top = -scrollDistance * rates.peak + 'px';
  greetingText.style.top = scrollDistance * rates.greetingText + 'px';
}

//add the userScroll func as a scroll event listener to the window
window.addEventListener('scroll', userScroll)
