document.addEventListener("keydown", function (event) {
if (event.key === "a") {
document.querySelector("#first").style.backgroundColor = "pink"
} else if (event.key === 's') {
document.querySelector("#second").style.backgroundColor = "orange"
} else if (event.key === 'd') {
document.querySelector("#third").style.backgroundColor = "cyan"
}
});



