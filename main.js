// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll(".like-glyph").forEach(element => element.addEventListener('click', handleLike));

function handleLike(e) {
  console.log(e)
  const element = e.target
  if (element.innerText === EMPTY_HEART){
    mimicServerCall()
    .then(function (message) {
      handleSuccess(element);
    })
    .catch(function (errorMessage) {
      handleError(errorMessage);
    });
  } else{
    element.innerText = EMPTY_HEART
    element.classList.remove("activated-heart");
  }
 
}

function handleSuccess(element){
  console.log("success")
  console.log(element)
  element.innerText = FULL_HEART
  element.classList.add("activated-heart");
}

function handleError(errorMessage){
 const modal = document.querySelector("#modal")
 modal.classList.remove("hidden");
 const modalMessage = document.querySelector("#modal-message");
 modalMessage.innerText = errorMessage
 setTimeout(() => {
    modal.classList.add("hidden");
  }, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
