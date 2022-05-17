Descobri um Bug (eu acho) o drums.addEventListener aparentemente ele foje de seu escopo e modifica todos os elementos que forem "mexidos" na função.


const drums = document.querySelectorAll(".drums")


drums.forEach(addEventListener('click', (e) => {
    // const audio = new Audio('assets/sounds/tom-1.mp3')
    // audio.play()
    console.log(e.target.textContent)
    e.target.innerHTML = 'white'
}) )