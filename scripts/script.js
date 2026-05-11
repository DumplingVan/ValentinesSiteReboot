const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const popup = document.querySelector(".popup")
const popYes = document.getElementById("popYes")
const popNo = document.getElementById("popNo")
const wrapper = document.querySelector(".wrapper")

var width = null;
var height = null;
var hover = false;

var noclicks = 0;

yesButton.addEventListener("click", () => {
    console.log("Yes button was clicked.");

    yesButton.style.backgroundColor = "red";s
});

noButton.addEventListener("click", () => {
    console.log("No button was clicked.");

    noclicks += 1;

    if (noclicks == 1) {
        noButton.style.width = "8vh";
        noButton.style.height = "4vh";
    }
    else if (noclicks == 2) {
        noButton.style.width = "4vh";
        noButton.style.height = "2vh";
    }
    else if (noclicks == 3){
        popup.classList.add("active");
    }
})

popNo.addEventListener("click", () => {
    noclicks -= 1;

    popup.classList.remove("active");
})

popYes.addEventListener("click", () => {
    noclicks += 1;
    popup.classList.remove("active")

    let ranheight = Math.floor(Math.random() * height) + 1;
    let ranwidth = Math.floor(Math.random() * width) + 1;

    console.log(`New position is (${ranwidth}, ${ranheight})`)
    
    wrapper.appendChild(noButton);
    noButton.style.position = "absolute";
    noButton.style.top = String(ranheight) + "px";
    noButton.style.left = String(ranwidth) + "px";

    hover = true;
});

noButton.addEventListener("mouseover", () => {
    if (hover == true){
        let ranheight = Math.floor(Math.random() * height) + 1;
        let ranwidth = Math.floor(Math.random() * width) + 1;

        console.log(`New position is (${ranwidth}, ${ranheight})`)

        noButton.style.top = String(ranheight) + "px";
        noButton.style.left = String(ranwidth) + "px";
    }
}, false);

window.addEventListener("resize", () => {
    height = window.innerHeight;
    width = window.innerWidth;

    console.log(`The new window size is ${height} x ${width}.`);
});

console.log("Script succesfully loaded!");