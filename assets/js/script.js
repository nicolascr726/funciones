// function pintar(){
// ele = document.getElementById("ele")
// ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele")
// ele.addEventListener("click", pintar);

const ele = document.getElementById("ele")
ele.addEventListener("click", function(){
ele.style.backgroundColor = "yellow"
});

function pintar(ele, color='green'){
ele.style.backgroundColor= color
}

pintar(ele)