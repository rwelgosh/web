console.clear()

var projContainerEl = document.querySelector(".carousel");

function switchClasses(direction) {
    curProj = projContainerEl.querySelector(".cur-proj");
    nextProj = projContainerEl.querySelector(".next-proj");
    hidProj = projContainerEl.querySelector(".hid-proj");
    prevProj = projContainerEl.querySelector(".prev-proj");

    curProj.classList.remove("cur-proj");
    nextProj.classList.remove("next-proj");
    hidProj.classList.remove("hid-proj");
    prevProj.classList.remove("prev-proj");

    // changeHidden(direction);

    if (direction === "left") {
        curProj.classList.add("next-proj");
        nextProj.classList.add("hid-proj");
        hidProj.classList.add("prev-proj");
        prevProj.classList.add("cur-proj");
    } else if (direction === "right") {
         curProj.classList.add("prev-proj");
        nextProj.classList.add("cur-proj");
        hidProj.classList.add("next-proj");
        prevProj.classList.add("hid-proj");
    }
}

document.getElementById("right-btn").addEventListener("click", function() {
    switchClasses("right");
});

document.getElementById("left-btn").addEventListener("click", function() {
    switchClasses("left")
});