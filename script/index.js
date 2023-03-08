function copiaremail() {
    navigator.clipboard.writeText("marcelodev2002@gmail.com");
}

//Typewriter
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: ""
});

typewriter.typeString('FullStack')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Front-end')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Back-end')
    .pauseFor(2000)
    .deleteAll()
    .start();


//card 3D
const $cards = document.getElementsByClassName("card");
let bounds;

for (let i = 0; i <= 2; i++) {
    function rotateToMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        $cards[i].style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${-center.y / 100},
      ${center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

        $cards[i].querySelector(".glow").style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff34,
      #0000000f
    )`;
    }

    $cards[i].addEventListener("mouseenter", () => {
        bounds = $cards[i].getBoundingClientRect();
        document.addEventListener("mousemove", rotateToMouse);
    });

    $cards[i].addEventListener("mouseleave", () => {
        document.removeEventListener("mousemove", rotateToMouse);
        $cards[i].style.transform = "";
        $cards[i].style.background = "";
    });
}



