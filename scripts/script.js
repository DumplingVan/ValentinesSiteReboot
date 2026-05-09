const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const popup = document.querySelector(".popup")
const popYes = document.getElementById("popYes")
const popNo = document.getElementById("popNo")

var noclicks = 0;

function yesfunction(){
    console.log("Yes button was clicked.")

    yesButton.style.backgroundColor = "red";
}

function nofunction(){
    console.log("No button was clicked.")

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
        noButton.blur()
        
        popup.classList.add("active")
    }
}

console.log("Script succesfully loaded!")

