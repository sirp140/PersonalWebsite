//create variables
let sky = document.getElementById("sky");
let bird = document.getElementById("bird");
let greetingText = document.getElementById("greetingText");
let sendButton = document.getElementById("sendButton");
let darkModeButton = document.getElementById("darkModeBttn");
let revealableContainers = document.querySelectorAll(".revealable");

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

const validateForm = () => {
  let contactForm = document.getElementById("contactForm").elements;
  let containError = false;

  //create person object
  let person = {
    name: contactForm[0].value,
    email: contactForm[1].value,
    message: contactForm[2].value
  };
  
  //loop through all elements check if input < 2 then give error
  for(let i = 0; i < contactForm.length; i++){
    console.log(contactForm[i].value);
    if (contactForm[i].value.length < 2){
      containError = true;
      contactForm[i].classList.add('error');
    }
    else{
      contactForm[i].classList.remove('error');
    }
  }
  if(!person.email.includes('.com')){
    containError = true;
    email.classList.add('error');
  }
  else {
    email.classList.remove('error');
  }

  //need to clear fields??
  if(containError == false){
    toggleModal(person);
  }
}

const toggleModal = (person) => {
  //modal represents the entire modal including the background
  //modalContent contains the text you will show the user
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");

  //Set the display style property of the entire modal to flex
  modal.style.display = "flex";

  //Set the textContent of the modal to a nice message
  modalContent.textContent = `Thank you,  ${person.name}.`;



  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);

}

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance){
      //add the active class to the revealableContainer's classlist
      revealableContainers[i].classList.add('active');
    }
    else {
      //remove the active class
       revealableContainers[i].classList.remove('active');
    }
  }
}

const turnDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}



//add the userScroll func as a scroll event listener to the window
window.addEventListener('scroll', userScroll)

//add listener to sendButton
sendButton.addEventListener('click', validateForm)

window.addEventListener("scroll", reveal);

darkModeButton.addEventListener("click", turnDarkMode);