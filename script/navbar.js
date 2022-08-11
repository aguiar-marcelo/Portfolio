var box = document.getElementById("checkbox-menu")
var nav = document.getElementById("nav-vertical")
var links = document.querySelectorAll(".nav-link")

function abrir() {
    nav.style.transform = 'translate3d(0,0,0)';
}

function fechar() {
    nav.style.transform = 'translate3d(0,-110%,0)';
    box.checked=false
}

box.onclick = function () {
    if (box.checked) {
        abrir()
    } else {
        fechar()
    }
};

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", fechar);
  }