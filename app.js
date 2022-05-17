function makeSound(key) {
  switch (key) {
    case "w":
      audio = new Audio("assets/sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("assets/sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("assets/sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("assets/sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("assets/sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("assets/sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("assets/sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}
document.addEventListener("keydown", (e) => {
  makeSound(e.key);
});
const drums = document.querySelectorAll(".drums");
drums.forEach(
  addEventListener("click", (e) => {
    const btnPress = e.target.textContent;
    makeSound(btnPress);
  })
);
