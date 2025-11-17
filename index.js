let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //play audio
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);

    //show animation
      buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key); //play audio

  //show animation
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "A":
      let tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "B":
      let tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "C":
      let tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "D":
      let tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    case "E":
      let snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "F":
      let crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "G":
      let kick = new Audio("kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("key pressed", key);
  }
}

function buttonAnimation(key) {
let activeButton = document.querySelector("." + key);
activeButton.classList.add("pressed");

setTimeout(function() {
activeButton.classList.remove("pressed");
},100)

}
