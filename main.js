// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelectorAll(".like-glyph")
heart.forEach( (element) => {

  element.addEventListener("click", () => {

    mimicServerCall()
    .then(() => {

      if(element.innerHTML === FULL_HEART) {
        element.innerHTML = EMPTY_HEART
        element.classList.remove("activated-heart")
      }else {
        element.innerHTML = FULL_HEART
        element.classList = "activated-heart"
      }

    })

    .catch(error => {
      const message = document.querySelector("#modal")
      message.classList.remove("hidden")

      setTimeout( () => {
        message.classList = "hidden"
      }, 3000)
    })
  })

})


//------------------------------------------------------------------------------