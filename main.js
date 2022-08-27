// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let clickStatus = []

document.addEventListener('DOMContentLoaded',()=>{

  let likeIcons = document.querySelectorAll('.like-glyph')

  likeIcons.forEach((icon, index)=>{

    clickStatus.push(false)

    icon.setAttribute('id', `${index}`)
    icon.addEventListener('click', (event)=>{

      let serverCall = mimicServerCall()

      serverCall.then(
        (result)=>{

          console.log("success")
          console.log(result)
          let icon = event.target
          let index = event.target.getAttribute('id')

          let isClicked = clickStatus[index]

          console.log(icon)

          console.log(index)

          console.log(likeIcons)

          if(isClicked){
            icon.innerHTML = EMPTY_HEART
            //icon.style = "background-color:white"
            clickStatus[index] = false
          }else{
            icon.innerHTML = FULL_HEART
            //icon.style = "background-color:red"
            clickStatus[index] = true
          }

          console.log(likeIcons)

          

          console.log(icon)
        },
      
        ).catch(
          (error)=> handleError(error)
        )

      //console.log("clicked")
    })
  })
})



function handleError(error){
  console.log(error, "from catch")
  let modal = document.querySelector('#modal')

  modal.removeAttribute('class', 'hidden')

  setTimeout(function(){
    modal.setAttribute('class', 'hidden')
  },1000)

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


