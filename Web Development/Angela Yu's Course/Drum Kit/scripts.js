let w = new Audio("sounds/crash.mp3")

document.querySelector(".set .w").addEventListener("click", () => {
    w.play()
})

let a = new Audio("sounds/kick-bass.mp3")
document.querySelector(".set .a").addEventListener("click", () => {
    a.play()
})

let s = new Audio("sounds/snare.mp3")
document.querySelector(".set .s").addEventListener("click", () => {
    s.play()
})

let d = new Audio("sounds/tom-1.mp3")
document.querySelector(".set .d").addEventListener("click", () => {
    d.play()
})

let j = new Audio("sounds/tom-2.mp3")
document.querySelector(".set .j").addEventListener("click", () => {
    j.play()
})

let k = new Audio("sounds/tom-3.mp3")
document.querySelector(".set .k").addEventListener("click", () => {
    k.play()
})

let l = new Audio("sounds/tom-4.mp3")
document.querySelector(".set .l").addEventListener("click", () => {
    l.play()
})

document.addEventListener('keydown', (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case 'w':
            w.play()
            break;
        case 'a':
            a.play()
            break;
        case 's':
            s.play()
            break;
        case 'd':
            d.play()
            break;
        case 'j':
            j.play()
            break;
        case 'k':
            k.play()
            break;
        case 'l':
            l.play()
            break;
        default: console.log("Wrong Button");
    }
}

function buttonAnimation (currentKey) {
    let buttonPressed = document.querySelector(`.${currentKey}`);
    buttonPressed.classList.add("pressed");

    setTimeout(() => {
        buttonPressed.classList.remove("pressed");
    }, 100)
}
