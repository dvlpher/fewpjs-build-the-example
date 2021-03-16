// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeHearts = document.querySelectorAll(`.like-glyph`);

for (let i = 0; i < likeHearts.length; i++)
  likeHearts[i].addEventListener("click", function () {
    mimicServerCall()
      .then(status => function())
      .then((res) => res.json())
      .catch((error) => {
        throw error;
      });
    console.log("The Heart has been pressed");
    if (likeHearts[i].className === "like-glyph") {
      likeHearts[i].classList.remove("like-glyph");
      likeHearts[i].classList.add("activated-heart");
      likeHearts[i].innerText = `${FULL_HEART}`;
    } else {
      likeHearts[i].classList.remove("activated-heart");
      likeHearts[i].classList.add("like-glyph");
      likeHearts[i].innerText = `${EMPTY_HEART}`;
    }
  });

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
